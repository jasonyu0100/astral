'use client';
import { studioMap } from '@/(verses)/(voyager)/studio/map';
import { useGlobalUser } from '@/(store)/user/main';
import { stripeExistingBillingSession } from '@/(ouros)/(stripe)/main';

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
        onClick={() => (window.location.href = studioMap.studio.now.link)}
      >
        BACK HOME
      </button>
    </>
  );
}
