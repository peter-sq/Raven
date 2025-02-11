import express from 'express';
import getTransfers from '../../controllers/userTransfers/transferController.js';
import authorizeUser from '../../middleware/authorization.js';

const router = express.Router();

// Route to get transfer history
router.get('/transfers', authorizeUser,  getTransfers);

export default router;
