import db from '../../../db/knex.js';

const getTransactionHistory = async (req, res) => {
  try {
    const  user_id  = req.body.user_id; 

    // Retrieve the user's transactions 
    const transactions = await db('transactions')
      .where({ user_id })
      .orderBy('created_at', 'desc'); 

    if (!transactions.length) {
      return res.status(404).json({ message: 'No transactions found.' });
    }

    return res.status(200).json({ transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return res.status(500).json({ message: 'Error fetching transaction history.', error: error.message });
  }
};

export default getTransactionHistory;
