import { userDbWrapper } from '@/architecture/client/user/main';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Determine which Stripe secret key to use based on live mode
const STRIPE_SK =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_SK_LIVE || '' // Live secret key
    : process.env.STRIPE_SK_TEST || ''; // Test secret key

const STRIPE_WH =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_WH_LIVE || '' // Live webhook secret
    : process.env.STRIPE_WH_TEST || ''; // Test webhook secret

// Initialize Stripe with the determined secret key
const stripe = new Stripe(STRIPE_SK, {
  apiVersion: '2023-10-16', // Use the latest API version or your desired version
});

// This function will handle the incoming Stripe webhook events
export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text(); // Get the raw body for signature verification

  try {
    // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature || '', // Ensure we handle potential undefined signature
      STRIPE_WH,
    );

    // Process the event
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent; // Extract the payment intent object
        console.log('PaymentIntent was successful!');
        // TODO: Handle successful payment intent (e.g., update your database)
        break;
      }
      case 'payment_method.attached': {
        const paymentMethod = event.data.object as Stripe.PaymentMethod; // Extract the payment method object
        console.log('PaymentMethod was attached to a customer!');
        // TODO: Handle attached payment method
        break;
      }
      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription; // Extract the updated subscription object
        console.log('Subscription created');
        const subscriptionId = subscription.id as string;
        const customerId = subscription.customer as string;
        const priceId = subscription.plan.id as string;
        const productId = subscription.plan.product as string;

        console.log(subscriptionId, customerId, priceId, productId);
        console.log('CREATED SUBSCRIPTION');
        break;
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription; // Extract the updated subscription object
        console.log('Subscription updated');
        console.log(subscription);
        const subscriptionId = subscription.id as string;
        const customerId = subscription.customer as string;
        const priceId = subscription.plan.id as string;
        const productId = subscription.plan.product as string;

        console.log(subscriptionId, customerId, priceId, productId);
        const listPayload = await userDbWrapper.listFromVariables({
          filter: {
            customerId: {
              eq: customerId,
            },
          },
        });

        if (listPayload.length > 0) {
          const user = listPayload.at(0);
          const updatePayload = await userDbWrapper.updateObj(user?.id || '', {
            subscriptionId: subscriptionId,
            customerId: customerId,
            productId: productId,
            priceId: priceId,
          });
          console.log('UPDATED SUBSCRIPTION', updatePayload);
        } else {
          console.log('USER NOT IN SYSTEM');
        }
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription; // Extract the updated subscription object
        console.log('Subscription deleted');
        console.log(subscription);
        const subscriptionId = subscription.id as string;
        const customerId = subscription.customer as string;
        const priceId = subscription.plan.id as string;
        const productId = subscription.plan.product as string;

        console.log(subscriptionId, customerId, priceId, productId);
        const listPayload = await userDbWrapper.listFromVariables({
          filter: {
            customerId: {
              eq: customerId,
            },
          },
        });

        if (listPayload.length > 0) {
          const user = listPayload.at(0);
          const updatePayload = await userDbWrapper.updateObj(user?.id || '', {
            customerId: customerId,
            subscriptionId: '',
            productId: '',
            priceId: '',
          });
          console.log('DELETE SUBSCRIPTION', updatePayload);
        } else {
          console.log('USER NOT IN SYSTEM');
        }

        break;
      }
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice; // Extract the invoice object
        console.log('Invoice paid');
        // TODO: Handle successful invoice payment
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice; // Extract the invoice object
        console.log('Invoice payment failed');
        // TODO: Handle failed invoice payment
        break;
      }
      case 'charge.succeeded': {
        const charge = event.data.object as Stripe.Charge; // Extract the charge object
        console.log('Charge successful');
        // TODO: Handle successful charge
        break;
      }
      case 'charge.failed': {
        const charge = event.data.object as Stripe.Charge; // Extract the charge object
        console.log('Charge failed');
        // TODO: Handle failed charge
        break;
      }
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session; // Extract the session object
        console.log('Checkout session completed');
        // TODO: Handle completed checkout session
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Acknowledge receipt of the webhook
    return NextResponse.json(
      { message: 'Webhook received successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { message: 'Webhook error: ' + error.message },
      { status: 400 },
    );
  }
}
