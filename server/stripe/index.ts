import { Request, Response, Router } from 'express';
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
    return_url: `${req.headers.origin}/stripe/billing?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({ clientSecret: portalSession.client_secret });
});

stripeRouter.get('/get-checkout-session', async (req: Request, res: Response) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

stripeRouter.post('/customer', async (req: Request, res: Response) => {
  const data = req.body;
  const sessionId = data.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const customer = await stripe.customers.retrieve(session.customer);

  // Redirect to the URL for the session
  res.send({ customer: customer  });
})

stripeRouter.post('/billing-session', async (req: Request, res: Response) => {
  const data = req.body;
  const sessionId = data.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const customer = await stripe.customers.retrieve(session.customer);
  const portalSession = await stripe.billingPortal.sessions.create({
    return_url: `${req.headers.origin}/stripe/billing?session_id=${sessionId}`,
    customer: customer.id,
  });

  // Redirect to the URL for the session
  res.send({ session: portalSession });
});