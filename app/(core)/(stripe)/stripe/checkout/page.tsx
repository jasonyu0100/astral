'use client';
import { stripeCheckoutSession } from '@/api/stripe/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const STRIPE_PK =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_PK_LIVE
    : process.env.STRIPE_PK_TEST;
const stripePromise = loadStripe(STRIPE_PK || '');

console.log('STRIPE_PK', STRIPE_PK, process.env.LIVE_MODE);

function Page() {
  const searchParams = useSearchParams();
  const priceId = searchParams.get('priceId');
  const [clientSecret, changeClientSecret] = useState('');

  useEffect(() => {
    async function checkoutSession() {
      stripeCheckoutSession(priceId || '').then((session) => {
        changeClientSecret(session.client_secret);
      });
    }
    if (priceId) {
      checkoutSession();
    }
  }, [priceId]);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <div className='w-[1000px]'>
        {clientSecret && (
          <>
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{
                clientSecret,
              }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </>
        )}
      </div>
    </div>
  );
}

export default PrivateAstralPage(Page);
