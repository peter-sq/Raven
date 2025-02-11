import express from 'express';
import getDeposits from '../../controllers/deposits/depositController.js';
import authorizeUser from '../../middleware/authorization.js';

const router = express.Router();

// Route to get deposit history
router.get('/deposits', authorizeUser,  getDeposits);

export default router;
