import express from 'express';

const router = express.Router();


// Webhook endpoint to handle incoming transfer notifications
router.post('/webhook', async (req, res) => {
  try {
    // Log the received webhook payload
    console.log(req.body);

 
    // Send a response to acknowledge receipt of the webhook
    res.status(200).send('Webhook received successfully');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal server error');
  }
});

export default router;
