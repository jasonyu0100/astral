'use client';
import { homeMap } from '@/(core)/(dashboard)/home/map';
import {
  stripeNewBillingSession,
  stripeProcessSubscription,
} from '@/external/stripe/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const update = useGlobalUser((state) => state.update);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') || '';

  useEffect(() => {
    if (!user.customerId) {
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
      alert('Updated User');
    });
  }

  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <button
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => openNewCustomerBillingSession()}
      >
        NEW BILLING
      </button>
      <button
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => (window.location.href = homeMap.home.personal.link)}
      >
        BACK HOME
      </button>
    </div>
  );
}

export default PrivateAstralPage(Page);
