import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileOverviewAura } from './aura/main';
import { UserProfileOverviewProject } from './project/main';
import { UserProfileOverviewSpaces } from './spaces/main';
import { UserProfileOverviewYour } from './your/main';

export function UserProfileOverviewPages() {
  const profileController = useContext(ContextForProfile);

  return (
    <div className='w-full p-[2rem]' style={{ height: 'calc(100% - 4rem)' }}>
      <div className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex w-full flex-col'>
          {profileController.state.page === ProfilePage.Your && (
            <UserProfileOverviewYour />
          )}
          {profileController.state.page === ProfilePage.Spaces && (
            <UserProfileOverviewSpaces />
          )}
          {profileController.state.page === ProfilePage.Project && (
            <UserProfileOverviewProject />
          )}
          {profileController.state.page === ProfilePage.Aura && (
            <UserProfileOverviewAura />
          )}
        </div>
      </div>
    </div>
  );
}
