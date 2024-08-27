import { stripeMap } from '@/(core)/(profile)/(finance)/stripe/map';
import {
  getPlanName,
  getPlanPrice,
} from '@/(core)/(profile)/(finance)/support/page';
import { portalMap } from '@/(portal)/map';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
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
