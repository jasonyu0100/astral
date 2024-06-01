'use client';
import { TopbarAvatar } from './container/right-group/avatar/main';
import { TopbarContainer } from './container/main';
import { TopbarIconLink } from './container/right-group/icon-link/main';
import { TopbarLogo } from './container/left-group/logo/main';
import { TopbarRightGroup } from './container/right-group/main';
import { SettingsIcon } from './(common)/icons/settings/main';
import { studioMap } from '@/(core)/(board)/studio/map';
import {
  ProfileModalContext,
  useProfileModal,
} from '@/(core)/(base)/(modals)/profile-modal/main';
import { ProfileModalView } from '@/(core)/(base)/(modals)/profile-modal/view';
import {
  SettingsModalContext,
  useSettingsModal,
} from '@/(core)/(base)/(modals)/settings-modal/main';
import { SettingsModalView } from '@/(core)/(base)/(modals)/settings-modal/view';
import { TopbarLink } from './container/left-group/link/main';
import { TopbarLeftGroup } from './container/left-group/main';

export function Topbar() {
  const profileModalContext = useProfileModal();
  const settingsModalContext = useSettingsModal();

  return (
    <SettingsModalContext.Provider value={settingsModalContext}>
      <SettingsModalView />
      <ProfileModalContext.Provider value={profileModalContext}>
        <ProfileModalView />
        <TopbarContainer>
          <TopbarLogo href={studioMap.studio.spaces.link} />
          <TopbarLeftGroup>
            <TopbarLink href={studioMap.studio.spaces.link}>HOME</TopbarLink>
            <TopbarLink href='/learn'>
              LEARN
            </TopbarLink>
            <TopbarLink href='/dilemma'>
              PLAY
            </TopbarLink>
            <TopbarLink href='/support'>
              SUPPORT
            </TopbarLink>
          </TopbarLeftGroup>
          <TopbarRightGroup>
            <div className='flex flex-row space-x-[1rem]'>
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
  );
}
