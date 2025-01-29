import express from "express";

import usersControllers from "../../controllers/users/usersControllers.js";

const router = express.Router();

// Register new user
router.post('/register', usersControllers.Register);

// User login
router.post('/login', usersControllers.Login);


export default router;


