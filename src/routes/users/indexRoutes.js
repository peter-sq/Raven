import express from 'express';
import userRoute from './userRoutes.js';



const router = express.Router();

router.get("/status", (_, res) => res.send("OK"));

//users Routes
router.use("/user", userRoute);


export default router;

