import { FormBody } from '@/(common)/form/body/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { SettingsModalContext } from '../main';
import { useGlobalUser } from '@/(store)/user/main';
import { getPlanName, getPlanPrice } from '@/(ouros)/pricing/page';
import Link from 'next/link';
import { stripeMap } from '@/(ouros)/stripe/map';

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
