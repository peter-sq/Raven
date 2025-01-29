import express from 'express';
import usercreateAccount  from '../../controllers/account/userAccount.js' 

const router = express.Router();


// Route to create an account
router.post("/create", usercreateAccount);


export default router;
