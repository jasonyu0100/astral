import { userDbWrapper } from '@/architecture/client/user/main';
import { Amplify } from 'aws-amplify';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import Stripe from 'stripe';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Amplify configuration
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: process.env.GRAPHQL_ENDPOINT || '',
      region: 'ap-southeast-2',
      defaultAuthMode: 'apiKey',
      apiKey: process.env.GRAPHQL_APIKEY || '',
    },
  },
});

// Initialize Express app
const app = express();

// Initialize Stripe with the appropriate secret key based on live mode
const stripe = new Stripe(
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_SK_LIVE || ''
    : process.env.STRIPE_SK_TEST || '',
  {
    apiVersion: '2023-10-16',
  },
);

// Log loaded environment variables for verification
console.log('Loaded Environment Variables:', process.env);

// Use raw bodyParser for webhook signature verification
app.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature'];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig as string,
        process.env.STRIPE_WEBHOOK_SECRET || '',
      );
    } catch (err) {
      console.error('⚠️ Webhook signature verification failed:', err.message);
      return res.sendStatus(400);
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('💰 PaymentIntent was successful!', paymentIntent);
        // DO SOMETHING HERE
        break;
      }
      case 'payment_method.attached': {
        const paymentMethod = event.data.object as Stripe.PaymentMethod;
        console.log('PaymentMethod was attached to a customer!', paymentMethod);
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  },
);

// Hello World endpoint
app.get('/hello', async (req: Request, res: Response) => {
  try {
    const users = await userDbWrapper.listAllObjs();
    console.log(users);
    res.send('Hello, World!');
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Secret endpoint
app.get('/secret', (req: Request, res: Response) => {
  res.json({ secret: process.env.STRIPE_WEBHOOK_SECRET || '' });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
