import { amplifyClient } from '@/api/aws/graphql/main';
import { listUserObjs } from '@/graphql/queries';
import { UserObj } from '@/server/model/user/main';
import bcrypt from 'bcryptjs';

const STRIPE_SK =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(STRIPE_SK);

export async function emailLoginUser(email: string, password: string) {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {
      filter: {
        email: {
          eq: email,
        },
      },
    },
  });
  const users = (payload?.data?.listUserObjs?.items as UserObj[]) || [];

  if (users.length === 0) {
    return { status: false, error: 'Email is invalid' };
  } else {
    const user = users[0];
    const userHashedPassword = user?.passwordHash || '';
    const match = await bcrypt.compare(password, userHashedPassword);
    if (match) {
      user?.passwordHash && delete user.passwordHash;
      if (user.subscriptionId === null) {
        const timeDiff =
          new Date().getTime() - new Date(user.created).getTime();
        const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        if (0 < daysDifference && daysDifference < 14) {
          return { status: false, error: 'Account trial is over' };
        }
      } else {
        const subscription = await stripe.subscriptions.retrieve(
          user.subscriptionId,
        );
        if (subscription.plan.active !== true) {
          return { status: false, error: 'Subscription is not active' };
        }
      }
      return { status: true, data: user };
    } else {
      return { status: false, error: 'Password is invalid' };
    }
  }
}
