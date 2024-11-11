'use client';
import { homeMap } from '@/(core)/(dashboard)/home/map';
import { stripeExistingBillingSession } from '@/external/stripe/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import Link from 'next/link';

function Page() {
  const user = useGlobalUser((state) => state.user);

  async function openExistingCustomerBillingSession() {
    stripeExistingBillingSession(user.customerId || '').then(
      (billingSession) => {
        window.location.href = billingSession.url;
      },
    );
  }

  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <button
        type='submit'
        role='link'
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => openExistingCustomerBillingSession()}
      >
        OPEN BILLING
      </button>
      <Link href={homeMap.home.personal.link}>
        <button
          type='submit'
          role='link'
          className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        >
          BACK HOME
        </button>
      </Link>
    </div>
  );
}

export default PrivateAstralPage(Page);
