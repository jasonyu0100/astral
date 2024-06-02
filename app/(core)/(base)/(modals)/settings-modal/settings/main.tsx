import { FormBody } from '@/(components)/(form)/body/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext } from 'react';
import { SettingsModalContext } from '../main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import Link from 'next/link';
import { getPlanName, getPlanPrice } from '@/(core)/(misc)/(support)/(finance)/support/page';
import { stripeMap } from '@/(core)/(misc)/(support)/(finance)/stripe/map';

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
