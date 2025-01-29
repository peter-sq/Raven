import express from 'express';
import transferToBank from '../../controllers/transfer/transferController.js';

const router = express.Router();

router.post('/transfer', transferToBank);

export default router;
