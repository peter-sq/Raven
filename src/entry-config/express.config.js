import express from 'express';
import dotenv from 'dotenv';
import { body } from 'express-validator';

dotenv.config();

import routes from '../routes/authRoutes/index.route';

/**
 * Express instance
 * @public
 */

const app = express(); 

// parse body params and attache them to req.body
app.use(express.json());

// mount api v1 routes
app.use("/api/v1", routes);


app.get("/", (req, res) => {
  res.send("Welcome to phr Mymedical app 💵💵💵 ");
});

export default app;