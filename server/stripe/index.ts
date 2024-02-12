import { Request, Response, Router } from 'express';
import { amplifyClient } from '../client';
import { updateUserObj } from '../graphql/mutations';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const stripeRouter = Router();

stripeRouter.post('/webhook', async (req: Request, res: Response) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  const webhookSecret = '{{STRIPE_WEBHOOK_SECRET}}';
  if (webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret,
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  switch (eventType) {
    case 'checkout.session.completed':
      // Payment is successful and the subscription is created.
      // You should provision the subscription and save the customer ID to your database.
      break;
    case 'invoice.paid':
      // Continue to provision the subscription as payments continue to be made.
      // Store the status in your database and check when a user accesses your service.
      // This approach helps you avoid hitting rate limits.
      break;
    case 'invoice.payment_failed':
      // The payment failed or the customer does not have a valid payment method.
      // The subscription becomes past_due. Notify your customer and send them to the
      // customer portal to update their payment information.
      break;
    default:
    // Unhandled event type
  }

  res.sendStatus(200);
});

stripeRouter.post('/checkout-session', async (req: Request, res: Response) => {
  const priceId = req.body.priceId;
  const portalSession = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    return_url: `${req.headers.origin}/stripe/billing/new?session_id={CHECKOUT_SESSION_ID}`,
  });
  res.send({ clientSecret: portalSession.client_secret });
});

stripeRouter.post('/existing-billing', async (req: Request, res: Response) => {
  const data = req.body;
  const customerId = data.customerId;
  const customer = await stripe.customers.retrieve(customerId);
  const billingSession = await stripe.billingPortal.sessions.create({
    return_url: `${req.headers.origin}/stripe/billing/updated`,
    customer: customer.id,
  });

  res.send({ billingSession: billingSession });
});

stripeRouter.post('/new-billing', async (req: Request, res: Response) => {
  const data = req.body;
  const sessionId = data.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const customer = await stripe.customers.retrieve(session.customer);
  const billingSession = await stripe.billingPortal.sessions.create({
    return_url: `${req.headers.origin}/stripe/billing/new?session_id=${sessionId}`,
    customer: customer.id,
  });

  res.send({ billingSession: billingSession });
});

stripeRouter.post(
  '/process-subscription',
  async (req: Request, res: Response) => {
    const data = req.body;
    const sessionId = data.sessionId;
    const userId = data.userId;

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription,
    );
    const payload = await amplifyClient.graphql({
      query: updateUserObj,
      variables: {
        input: {
          id: userId,
          customerId: session.customer,
          subscriptionId: session.subscription,
          priceId: subscription.plan.id,
        },
      },
    });
    const user = payload.data.updateUserObj;
    user?.passwordHash && delete user.passwordHash;

    res.send({ user: user });
  },
);
