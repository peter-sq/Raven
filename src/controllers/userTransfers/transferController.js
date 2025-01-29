import db from '../../../db/knex.js';

const getTransfers = async (req, res) => {
  try {
    const  user_id  = req.body.user_id; 

    // Retrieve the user's transfers 
    const transfers = await db('transactions')
      .where({ user_id })
      .whereIn('type', ['debit', 'credit'])  
      .orderBy('created_at', 'desc');  

    if (!transfers.length) {
      return res.status(404).json({ message: 'No transfers found.' });
    }

    return res.status(200).json({ transfers });
  } catch (error) {
    console.error('Error fetching transfers:', error);
    return res.status(500).json({ message: 'Error fetching transfer history.', error: error.message });
  }
};

export default getTransfers;
