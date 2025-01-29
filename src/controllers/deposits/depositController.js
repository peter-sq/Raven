import db from '../../../db/knex.js';

const getDeposits = async (req, res) => {
  try {
    // const  user_id  = req.user.user_id;

    const  user_id  = req.body.user_id; 



    // Retrieve the user's deposits
    const deposits = await db('transactions')
      .where({ user_id, type: 'credit' }) 
      .orderBy('created_at', 'desc'); 

    if (!deposits.length) {
      return res.status(404).json({ message: 'No deposits found.' });
    }

    return res.status(200).json({ deposits });
  } catch (error) {
    console.error('Error fetching deposits:', error);
    return res.status(500).json({ message: 'Error fetching deposit history.', error: error.message });
  }
};

export default getDeposits;
