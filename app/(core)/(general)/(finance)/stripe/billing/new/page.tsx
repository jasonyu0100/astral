'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  stripeNewBillingSession,
  stripeProcessSubscription,
} from '@/(api)/stripe/main';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const user = useGlobalUser((state) => state.user);
  const update = useGlobalUser((state) => state.update);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') || '';

  useEffect(() => {
    if (user.customerId === null || user.priceId === undefined) {
      processSubscription();
    } else {
      window.location.href = '/stripe/billing/existing';
    }
  }, []);

  async function openNewCustomerBillingSession() {
    stripeNewBillingSession(sessionId).then((billingSession) => {
      window.location.href = billingSession.url;
    });
  }

  async function processSubscription() {
    stripeProcessSubscription(sessionId, user.id).then((user) => {
      update(user);
      alert('Processed Subscription');
    });
  }

  return (
    <>
      <button
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => openNewCustomerBillingSession()}
      >
        OPEN BILLING
      </button>
      <button
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => (window.location.href = studioMap.studio.spaces.link)}
      >
        BACK HOME
      </button>
    </>
  );
}
