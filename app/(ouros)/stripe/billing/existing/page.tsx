'use client';
import { studioMap } from '@/(cosmos)/(voyager)/studio/map';
import { useGlobalUser } from '@/state/main';

export default function Page() {
  const user = useGlobalUser((state) => state.user);

  async function openExistingCustomerBillingSession() {
    let resp = await fetch('/api/stripe/existing-billing', {
      method: 'POST',
      body: JSON.stringify({
        customerId: user.customerId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await resp.json();
    let url = data.billingSession.url;
    window.location.href = url;
  }

  return (
    <>
      <button
        type='submit'
        role='link'
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => openExistingCustomerBillingSession()}
      >
        OPEN BILLING
      </button>
      <button
        type='submit'
        role='link'
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => (window.location.href = studioMap.studio.now.link)}
      >
        BACK HOME
      </button>
    </>
  );
}
