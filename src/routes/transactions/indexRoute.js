import express from 'express';
import webhookRoute from './webhookRoute.js';



const router = express.Router();

router.get("/status", (_, res) => res.send("OK"));

//webhook Routes
router.use("/api", webhookRoute);


export default router;

