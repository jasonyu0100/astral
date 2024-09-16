import { userProfileMap } from '@/(core)/(dashboard)/users/[id]/map';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralSettingsIcon } from '@/icons/settings/main';
import { useContext, useEffect, useState } from 'react';
import { ContextForUserSettingsModals } from '../../modals/controller/main';
import { TopbarAvatar } from './avatar/main';
import { TopbarIconLink } from './icon-link/main';

export function TopbarRightGroup() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const settingsModals = useContext(ContextForUserSettingsModals);
  const [userId, setUserId] = useState<string>('0');

  useEffect(() => {
    if (userId === loggedInUser.id) return;
    setUserId(loggedInUser.id);
  }, [loggedInUser]);

  return (
    <>
      <div className='ml-auto flex flex-row items-center space-x-[2rem]'>
        <div className='flex flex-row space-x-[1rem]'>
          <TopbarIconLink
            onClick={() => settingsModals.userSettingsModal.open()}
          >
            <AstralSettingsIcon className='fill-slate-500' />
          </TopbarIconLink>
        </div>
        <TopbarAvatar href={userProfileMap.profile.link(userId)} />
      </div>
    </>
  );
}
