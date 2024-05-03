import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import { UserObj } from '@/(lgx)/internal/model/user/main';
import { updateUserObj } from '@/graphql/mutations';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function stripeCheckoutSession(priceId: string) {
  const portalSession = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    return_url: `${window.location.origin}/stripe/billing/new?session_id={CHECKOUT_SESSION_ID}`,
  });

  return portalSession;
}

export async function stripeExistingBillingSession(customerId: string) {
  const customer = await stripe.customers.retrieve(customerId);
  const billingSession = await stripe.billingPortal.sessions.create({
    return_url: `${window.location.origin}/stripe/billing/updated`,
    customer: customer.id,
  });

  return billingSession;
}

export async function stripeNewBillingSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const customer = await stripe.customers.retrieve(session.customer);
  const billingSession = await stripe.billingPortal.sessions.create({
    return_url: `${window.location.origin}/stripe/billing/new?session_id=${sessionId}`,
    customer: customer.id,
  });

  return billingSession;
}

export async function stripeProcessSubscription(
  sessionId: string,
  userId: string,
) {
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
  const user = payload.data.updateUserObj as UserObj;
  user?.passwordHash && delete user.passwordHash;

  return user;
}
