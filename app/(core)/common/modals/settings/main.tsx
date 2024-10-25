import { getPlanName, getPlanPrice } from '@/(core)/(stripe)/pricing/page';
import { stripeMap } from '@/(core)/(stripe)/stripe/map';
import { portalMap } from '@/(portal)/map';
import { FormBody } from '@/components/form/body/main';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useEffect, useState } from 'react';

export function UserSettingsModal() {
  const user = useGlobalUser((state) => state.user);
  const logout = useGlobalUser((state) => state.logout);
  const openableController = useContext(ContextForOpenable);
  const [planName, setPlanName] = useState('');
  const [planPrice, setPlanPrice] = useState('');

  useEffect(() => {
    setPlanName(getPlanName(user.priceId || ''));
    setPlanPrice(getPlanPrice(user.priceId || ''));
  }, []);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Settings</FormTitle>
          <FormBody>
            <h1 className='font-bold'>Plan: {planName}</h1>
            <h1 className='font-bold'>Price: {planPrice}</h1>
          </FormBody>
          <FormFooter>
            {planName === 'Community Monthly' && (
              <FormButton
                variant={FormButtonVariant.PRIMARY}
                onClick={() => {
                  window.location.href = '/pricing';
                }}
              >
                Upgrade
              </FormButton>
            )}
            {planName !== 'Community Monthly' && (
              <FormButton
                variant={FormButtonVariant.PRIMARY}
                onClick={() => {
                  window.location.href = stripeMap.stripe.billing.existing.link;
                }}
              >
                Manage
              </FormButton>
            )}
            <FormButton
              variant={FormButtonVariant.SECONDARY}
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
