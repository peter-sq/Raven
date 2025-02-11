import express from 'express';
import getTransactionHistory  from '../../controllers/transactions/transactionController.js';
import authorizeUser from '../../middleware/authorization.js';

const router = express.Router();

// Route to get transaction history
router.get('/transactions', authorizeUser,  getTransactionHistory);

export default router;
