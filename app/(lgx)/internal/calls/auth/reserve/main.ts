import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import { createReservationObj } from '@/graphql/mutations';

export async function reservePosition(fname: string, lname: string, email: string) {
  const payload = await amplifyClient.graphql({
    query: createReservationObj,
    variables: {
      input: {
        fname,
        lname,
        email,
      },
    },
  });

  return { status: true, data: payload };
}
