import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes/users/indexRoutes.js';
import creteAccountRoute from './src/routes/accounts/accountRoutes.js'
import webhookRoute from './src/routes/transactions/webhookRoute.js';
import transferRoute from './src/routes/transferRoutes/transferRoute.js'
import userTransferRoutes from './src/routes/userTransferRoute/userTransferRoutes.js'
import userTransactionRoutes from './src/routes/transactionRoutes/transactionRoutes.js';
import userDepositRoutes from './src/routes/deposits/depositRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/api/v1', routes); // User routes
app.use('/api/v1', creteAccountRoute); // User routes
app.use('/api/v1', transferRoute); // transfer routes
app.use('/api/v1', webhookRoute); // Webhook route
app.use('/api/v1', userTransferRoutes); // User transfer routes
app.use('/api/v1', userTransactionRoutes); // user transaction routes
app.use('/api/v1', userDepositRoutes); // user deposit rutes


// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Raven Task  ");
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
