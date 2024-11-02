import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Determine which Stripe secret key to use based on live mode
const STRIPE_SK =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_SK_LIVE || '' // Live secret key
    : process.env.STRIPE_SK_TEST || ''; // Test secret key

// Initialize Stripe with the determined secret key
const stripe = new Stripe(STRIPE_SK, {
  apiVersion: '2023-10-16', // Use the latest API version or your desired version
});

// This function will handle the incoming Stripe webhook events
export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text(); // Get the raw body for signature verification

  try {
    // Use a single webhook secret from environment variables
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

    // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature || '', // Ensure we handle potential undefined signature
      webhookSecret,
    );

    // Process the event
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object; // Extract the payment intent object
        console.log('PaymentIntent was successful!', paymentIntent);
        // TODO: Handle successful payment intent (e.g., update your database)
        break;
      }
      case 'payment_method.attached': {
        const paymentMethod = event.data.object; // Extract the payment method object
        console.log('PaymentMethod was attached to a customer!', paymentMethod);
        // TODO: Handle attached payment method
        break;
      }
      // Add other cases as needed for different event types
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
