'use client';
import { homeMap } from '@/(core)/(dashboard)/home/map';
import { stripeExistingBillingSession } from '@/external/stripe/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';

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
      <h1 className='text-center font-extraBold text-3xl text-white'>
        Your payment settings are pending...{' '}
      </h1>
      <br />
      <button
        type='submit'
        role='link'
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => openExistingCustomerBillingSession()}
      >
        OPEN BILLING
      </button>
      <button
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => {
          window.location.href = homeMap.home.personal.link;
        }}
      >
        BACK HOME
      </button>
    </div>
  );
}

export default PrivateAstralPage(Page);
