import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { UserObj } from '@/(logic)/internal/model/user/main';
import { listUserObjs } from '@/graphql/queries';
import bcrypt from 'bcryptjs';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

export async function googleLoginUser(email: string, googleId: string) {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {
      filter: {
        email: {
          eq: email,
        },
        googleId: {
          eq: googleId,
        },
      },
    },
  });
  const users = (payload?.data?.listUserObjs?.items as UserObj[]) || [];

  if (users.length === 0) {
    return { status: false, error: 'Email is invalid' };
  } else {
    const user = users[0];
    user?.passwordHash && delete user.passwordHash;
    if (user.subscriptionId === null) {
      const timeDiff = new Date().getTime() - new Date(user.created).getTime();
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
  }
}
