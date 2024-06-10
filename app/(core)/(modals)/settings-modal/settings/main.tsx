import { FormBody } from '@/(components)/(form)/body/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext } from 'react';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import Link from 'next/link';
import {
  getPlanName,
  getPlanPrice,
} from '@/(core)/(general)/(finance)/support/page';
import { stripeMap } from '@/(core)/(general)/(finance)/stripe/map';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export function SettingsModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
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
            <h1 className='font-bold'>
              Plan: {getPlanName(user.priceId || '')}
            </h1>
            <h1 className='font-bold'>
              Price: {getPlanPrice(user.priceId || '')}
            </h1>
          </FormBody>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
