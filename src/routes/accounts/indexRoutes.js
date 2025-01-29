import express from 'express';
import accountRoute from './accountRoutes.js';




const router = express.Router();

router.get("/status", (_, res) => res.send("OK"));

//account Routes
router.use("/account", accountRoute);


export default router;

