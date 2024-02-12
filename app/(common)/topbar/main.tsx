'use client';
import { TopbarAvatar } from './container/right-group/avatar/main';
import { TopbarContainer } from './container/main';
import { TopbarIconLink } from './container/right-group/icon-link/main';
import { TopbarLogo } from './container/left-group/logo/main';
import { TopbarRightGroup } from './container/right-group/main';
import { SettingsIcon } from './(common)/icons/settings/main';
import { StackIcon } from './(common)/icons/cart/main';
import { studioMap } from '@/(cosmos)/(voyager)/studio/map';
import {
  ProfileModalContext,
  useProfileModal,
} from '@/(cosmos)/(modals)/profile-modal/main';
import { ProfileModalView } from '@/(cosmos)/(modals)/profile-modal/view';
import {
  SettingsModalContext,
  useSettingsModal,
} from '@/(cosmos)/(modals)/settings-modal/main';
import { SettingsModalView } from '@/(cosmos)/(modals)/settings-modal/view';
import {
  CartModalContext,
  useCartModal,
} from '@/(cosmos)/(modals)/cart-modal/main';
import { CartModalView } from '@/(cosmos)/(modals)/cart-modal/view';
import { TopbarLink } from './container/left-group/link/main';
import { TopbarLeftGroup } from './container/left-group/main';

export function Topbar() {
  const profileModalContext = useProfileModal();
  const settingsModalContext = useSettingsModal();
  const cartModalContext = useCartModal();

  return (
    <CartModalContext.Provider value={cartModalContext}>
      <SettingsModalContext.Provider value={settingsModalContext}>
        <ProfileModalContext.Provider value={profileModalContext}>
          <ProfileModalView />
          <SettingsModalView />
          <CartModalView />
          <TopbarContainer>
            <TopbarLogo href={studioMap.studio.now.link} />
            <TopbarLeftGroup>
              <TopbarLink href={studioMap.studio.now.link}>HOME</TopbarLink>
              <TopbarLink href='/learn'>LEARN</TopbarLink>
              <TopbarLink href='/pricing'>PRICING</TopbarLink>
            </TopbarLeftGroup>
            <TopbarRightGroup>
              <div className='flex flex-row space-x-[1rem]'>
                <TopbarIconLink
                  onClick={() => cartModalContext.editCartModal.open()}
                >
                  <StackIcon />
                </TopbarIconLink>
                <TopbarIconLink
                  onClick={() => settingsModalContext.settingsModal.open()}
                >
                  <SettingsIcon />
                </TopbarIconLink>
              </div>
              <TopbarAvatar
                onClick={() => profileModalContext.editProfileModal.open()}
              />
            </TopbarRightGroup>
          </TopbarContainer>
        </ProfileModalContext.Provider>
      </SettingsModalContext.Provider>
    </CartModalContext.Provider>
  );
}
