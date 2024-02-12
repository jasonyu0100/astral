'use client';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import { useGlobalUser } from '@/state/main';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
);

export default function Page() {
  const searchParams = useSearchParams();
  const user = useGlobalUser(state => state.user);
  const [clientSecret, changeClientSecret] = useState('');

  useEffect(() => {
    const priceId = searchParams.get('priceId');
    fetch('/api/stripe/checkout-session', {
      method: 'POST',
      body: JSON.stringify({
        priceId,
        userId: user.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (resp) => {
      const data = await resp.json();
      changeClientSecret(data.clientSecret);
    });
  }, []);

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
