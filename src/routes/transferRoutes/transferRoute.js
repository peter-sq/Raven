import express from 'express';
import transferToBank from '../../controllers/transfer/transferController.js';
import authorizeUser from '../../middleware/authorization.js';

const router = express.Router();

router.post('/transfer', authorizeUser, transferToBank);

export default router;
