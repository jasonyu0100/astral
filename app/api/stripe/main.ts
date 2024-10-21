import { UserObj } from '@/(server)/model/user/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import { updateUserObj } from '@/graphql/mutations';

const STRIPE_SK =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(STRIPE_SK);

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
  console.log(customer);
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
