import express from 'express';
import getTransfers from '../../controllers/userTransfers/transferController.js';

const router = express.Router();

// Route to get transfer history
router.get('/transfers',  getTransfers);

export default router;
