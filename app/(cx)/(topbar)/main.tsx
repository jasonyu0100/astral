'use client';
import { TopbarAvatar } from './container/right-group/avatar/main';
import { TopbarContainer } from './container/main';
import { TopbarIconLink } from './container/right-group/icon-link/main';
import { TopbarLogo } from './container/left-group/logo/main';
import { TopbarRightGroup } from './container/right-group/main';
import { SettingsIcon } from './(common)/icons/settings/main';
import { ListIcon } from './(common)/icons/cart/main';
import { studioMap } from '@/(cx)/(studio)/studio/map';
import {
  ProfileModalContext,
  useProfileModal,
} from '@/(modals)/profile-modal/main';
import { ProfileModalView } from '@/(modals)/profile-modal/view';
import {
  SettingsModalContext,
  useSettingsModal,
} from '@/(modals)/settings-modal/main';
import { SettingsModalView } from '@/(modals)/settings-modal/view';
import {
  ElementsModalContext,
  useElementsModal,
} from '@/(modals)/cart-modal/main';
import { CartModalView } from '@/(modals)/cart-modal/view';
import { TopbarLink } from './container/left-group/link/main';
import { TopbarLeftGroup } from './container/left-group/main';

export function Topbar() {
  const profileModalContext = useProfileModal();
  const settingsModalContext = useSettingsModal();
  const cartModalContext = useElementsModal();

  return (
    <ElementsModalContext.Provider value={cartModalContext}>
      <CartModalView />
      <SettingsModalContext.Provider value={settingsModalContext}>
        <SettingsModalView />
        <ProfileModalContext.Provider value={profileModalContext}>
          <ProfileModalView />
          <TopbarContainer>
            <TopbarLogo href={studioMap.studio.now.link} />
            <TopbarLeftGroup>
              <TopbarLink href={studioMap.studio.now.link}>HOME</TopbarLink>
              <TopbarLink href='/learn' target="_blank">LEARN</TopbarLink>
              <TopbarLink href='/support' target="_blank">SUPPORT</TopbarLink>
            </TopbarLeftGroup>
            <TopbarRightGroup>
              <div className='flex flex-row space-x-[1rem]'>
                <TopbarIconLink
                  onClick={() => cartModalContext.elementsModal.open()}
                >
                  <ListIcon />
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
    </ElementsModalContext.Provider>
  );
}
