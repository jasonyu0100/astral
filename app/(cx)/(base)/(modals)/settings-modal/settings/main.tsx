import { FormBody } from '@/(lib)/(form)/body/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { Modal } from '@/(lib)/(modal)/main';
import { useContext } from 'react';
import { SettingsModalContext } from '../main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import { getPlanName, getPlanPrice } from '@/(mx)/(support)/(finance)/pricing-support/page';
import Link from 'next/link';
import { stripeMap } from '@/(mx)/(support)/(finance)/stripe/map';

export function SettingsModal() {
  const user = useGlobalUser((state) => state.user);
  const modalContext = useContext(SettingsModalContext);
  const { opened, close } = modalContext.settingsModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Settings</FormTitle>
        <FormBody>
          <Link
            href={stripeMap.stripe.billing.existing.link}
            target='_blank'
            className='rounded bg-slate-300 p-[1rem] font-bold text-black'
          >
            Manage Subscription
          </Link>
          <h1 className='font-bold'>Plan: {getPlanName(user.priceId || '')}</h1>
          <h1 className='font-bold'>
            Price: {getPlanPrice(user.priceId || '')}
          </h1>
        </FormBody>
      </FormContainer>
    </Modal>
  );
}
