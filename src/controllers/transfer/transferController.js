import axios from 'axios';
import db from '../../../db/knex.js';

const transferToBank = async (req, res) => {
  const { bank_code, account_number, account_name, amount, narration, reference, currency, bank } = req.body;

  // Validate request body
  if (!bank_code || !account_number || !amount || amount <= 0 || !bank || !currency || !bank_code ) {
    return res.status(400).json({ message: 'Invalid transfer details provided.' });
  }



  try {
    const  user_id  = req.body.user_id; 

    console.log('User ID:', user_id);

    // Check if the user has sufficient balance
    const userAccount = await db('accounts').where({ user_id }).first();

    console.log("User balance", userAccount.balance);

    if (!userAccount || userAccount.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance.' });
    }

    // Deduct the amount from user's account
    await db('accounts')
      .where({ user_id })
      .update({ balance: userAccount.balance - amount });

    // Raven Atlas API for transfer
    const response = await axios.post(
      'https://integrations.getravenbank.com/v1/transfers/create', 
      {
        bank_code,
        account_number,
        account_name,
        bank,
        currency,
        narration,
        reference,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RAVEN_ATLAS_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const transferData = response.data;

    // Log the transfer in the database
    await db('transactions').insert({
      user_id,
      type: 'debit',
      amount,
      narration: narration || 'Transfer to other bank',
      status: 'success',
      reference: transferData.reference, 
    });

    return res.status(200).json({
      message: 'Transfer successful.',
      transferDetails: transferData,
    });
  } catch (error) {
    console.error('Error transferring funds:', error);

    // Rollback user's balance in case of failure
    await db('accounts')
      .where({ user_id }) 
      .update({ balance: db.raw('balance + ?', [amount]) });

    res.status(500).json({ message: 'Error processing transfer.', error: error.response?.data || error.message });
  }
};

export default transferToBank;
