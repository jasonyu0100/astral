import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { stripeMap } from '@/(core)/(profile)/(finance)/stripe/map';
import {
  getPlanName,
  getPlanPrice,
} from '@/(core)/(profile)/(finance)/support/page';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { portalMap } from '@/(portal)/map';
import Link from 'next/link';
import { useContext } from 'react';

export function SettingsModal() {
  const user = useGlobalUser((state) => state.user);
  const logout = useGlobalUser((state) => state.logout);
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
              className='rounded bg-slate-300 p-[1rem] font-bold text-slate-800'
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
          <FormFooter>
            <FormButton
              onClick={() => {
                alert('Logging out');
                window.location.href = portalMap.portal.login.link;
                logout();
              }}
            >
              Logout
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
