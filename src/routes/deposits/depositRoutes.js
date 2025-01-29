import express from 'express';
import getDeposits from '../../controllers/deposits/depositController.js';

const router = express.Router();

// Route to get deposit history
router.get('/deposits',  getDeposits);

export default router;
