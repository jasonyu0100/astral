'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { EditProfileModal } from '@/(core)/(modals)/edit-profile/main';
import { SettingsModal } from '@/(core)/(modals)/edit-settings/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { SettingsIcon } from './(common)/icons/settings/main';
import { DashboardTopbarContainer } from './container/main';
import { TopbarLink } from './left-group/link/main';
import { TopbarLogo } from './left-group/logo/main';
import { TopbarLeftGroup } from './left-group/main';
import { TopbarAvatar } from './right-group/avatar/main';
import { TopbarIconLink } from './right-group/icon-link/main';
import { TopbarRightGroup } from './right-group/main';

export function DashboardTopbar() {
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
      <DashboardTopbarContainer>
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
            <TopbarIconLink onClick={() => settingsOpenableController.open()}>
              <SettingsIcon />
            </TopbarIconLink>
          </div>
          <TopbarAvatar onClick={() => profileOpenableController.open()} />
        </TopbarRightGroup>
      </DashboardTopbarContainer>
    </>
  );
}
