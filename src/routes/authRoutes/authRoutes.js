import express from 'express';
import controllers from "../../controllers/users/users.controllers"

const router = express.Router();




// Register Route
router.post("/register", controllers.Register);

//Login Route
router.post("/Login", controllers.Login);

export default router;
