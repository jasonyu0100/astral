import { getPlanName, getPlanPrice } from '@/(core)/(stripe)/pricing/page';
import { stripeMap } from '@/(core)/(stripe)/stripe/map';
import { portalMap } from '@/(portal)/map';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCreditCardIcon } from '@/icons/credit-card/main';
import { AstralLogoutIcon } from '@/icons/logout/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useEffect, useState } from 'react';

export function UserSettingsModal() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const logout = useGlobalUser((state) => state.logout);
  const openableController = useContext(ContextForOpenable);
  const [planName, setPlanName] = useState('');
  const [planPrice, setPlanPrice] = useState('');

  useEffect(() => {
    setPlanName(getPlanName(loggedInUser.priceId || ''));
    setPlanPrice(getPlanPrice(loggedInUser.priceId || ''));
  }, []);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Plan</AstralModalTitle>
              <h1 className='text-2xl font-bold text-slate-300'>{planName}</h1>
              <h1 className='text-xl font-light text-slate-300'>{planPrice}</h1>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              {planName === 'Community Monthly' && (
                <AstralRoundedActionButton
                  onClick={() => {
                    window.location.href = '/pricing';
                  }}
                >
                  <AstralCreditCardIcon />
                </AstralRoundedActionButton>
              )}
              <AstralRoundedActionButton
                onClick={() => {
                  window.location.href =
                    loggedInUser.customerId &&
                    loggedInUser.subscriptionId &&
                    loggedInUser.priceId &&
                    loggedInUser.productId
                      ? stripeMap.stripe.billing.existing.link
                      : '/pricing';
                }}
              >
                <AstralCreditCardIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton
                className='from-slate-500 to-slate-600'
                onClick={() => {
                  alert('Logging out');
                  window.location.href = portalMap.portal.login.link;
                  logout();
                }}
              >
                <AstralLogoutIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
