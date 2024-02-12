'use client';
import { studioMap } from '@/(cosmos)/(voyager)/studio/map';
import { useGlobalUser } from '@/state/main';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const user = useGlobalUser((state) => state.user);
  const update = useGlobalUser((state) => state.update);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') || '';

  useEffect(() => {
    if (user.customerId === null) {
      processSubscription().then((data) => {
        update(data.user);
        alert('UPDATED USER');
      });
    } else {
      window.location.href = "/stripe/billing/existing"
    }
  }, []);

  async function openNewCustomerBillingSession() {
    let resp = await fetch('/api/stripe/new-billing', {
      method: 'POST',
      body: JSON.stringify({
        sessionId: sessionId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await resp.json();
    let url = data.billingSession.url;
    window.location.href = url;
  }

  async function processSubscription() {
    let resp = await fetch('/api/stripe/process-subscription', {
      method: 'POST',
      body: JSON.stringify({
        sessionId: sessionId,
        userId: user.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await resp.json();
    return data;
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
        onClick={() => (window.location.href = studioMap.studio.now.link)}
      >
        BACK HOME
      </button>
    </>
  );
}
