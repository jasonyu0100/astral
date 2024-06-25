import { SettingsModal } from '@/(core)/(common)/(topbar)/(modals)/settings/main';
import { EditProfileModal } from '@/(core)/(profile)/user/[id]/(pages)/profile/(modals)/profile/main';
import { userProfileMap } from '@/(core)/(profile)/user/[id]/map';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { SettingsIcon } from 'lucide-react';
import { useContext } from 'react';
import { TopbarAvatar } from './avatar/main';
import { TopbarIconLink } from './icon-link/main';

export function TopbarRightGroup() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
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
      <div className='ml-auto flex flex-row items-center space-x-[2rem]'>
        <div className='flex flex-row space-x-[1rem]'>
          <TopbarIconLink onClick={() => settingsOpenableController.open()}>
            <SettingsIcon />
          </TopbarIconLink>
        </div>
        <TopbarAvatar href={userProfileMap.profile.link(loggedInUser.id)} />
      </div>
    </>
  );
}
