'use client';
import { TopbarAvatar } from './container/right-group/avatar/main';
import { TopbarContainer } from './container/main';
import { TopbarIconLink } from './container/right-group/icon-link/main';
import { TopbarLogo } from './container/left-group/logo/main';
import { TopbarRightGroup } from './container/right-group/main';
import { SettingsIcon } from './(common)/icons/settings/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { TopbarLink } from './container/left-group/link/main';
import { TopbarLeftGroup } from './container/left-group/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { EditProfileModal } from '@/(core)/(modals)/edit-profile/main';
import { SettingsModal } from '@/(core)/(modals)/edit-settings/main';

export function Topbar() {
  const profileOpenableController = useControllerForOpenable();
  const settingsOpenableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={profileOpenableController}>
        <EditProfileModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={settingsOpenableController}>
        <SettingsModal />
      </ContextForOpenable.Provider>
      <TopbarContainer>
        <TopbarLogo href={studioMap.studio.spaces.link} />
        <TopbarLeftGroup>
          <TopbarLink href={studioMap.studio.spaces.link}>HOME</TopbarLink>
          <TopbarLink href='/learn'>LEARN</TopbarLink>
          <TopbarLink href='/dev'>DEV</TopbarLink>
          <TopbarLink href='/dilemma'>PLAY</TopbarLink>
          <TopbarLink href='/support'>SUPPORT</TopbarLink>
        </TopbarLeftGroup>
        <TopbarRightGroup>
          <div className='flex flex-row space-x-[1rem]'>
            <TopbarIconLink
              onClick={() => settingsOpenableController.open()}
            >
              <SettingsIcon />
            </TopbarIconLink>
          </div>
          <TopbarAvatar
            onClick={() => profileOpenableController.open()}
          />
        </TopbarRightGroup>
      </TopbarContainer>
    </>
  );
}
