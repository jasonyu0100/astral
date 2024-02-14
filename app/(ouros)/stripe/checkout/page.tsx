'use client';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import { stripeCheckoutSession } from '@/(ouros)/(stripe)/main';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY || '');

export default function Page() {
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
