'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { stripeExistingBillingSession } from '@/(api)/stripe/main';

export default function Page() {
  const user = useGlobalUser((state) => state.user);

  async function openExistingCustomerBillingSession() {
    stripeExistingBillingSession(user.customerId || "").then(billingSession => {
      window.location.href = billingSession.url;
    });
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
        onClick={() => (window.location.href = studioMap.studio.spaces.link)}
      >
        BACK HOME
      </button>
    </>
  );
}
