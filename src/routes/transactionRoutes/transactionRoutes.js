import express from 'express';
import getTransactionHistory  from '../../controllers/transactions/transactionController.js';

const router = express.Router();

// Route to get transaction history
router.get('/transactions',  getTransactionHistory);

export default router;
