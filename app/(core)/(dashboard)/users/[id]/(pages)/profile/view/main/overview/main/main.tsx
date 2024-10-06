import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileOverviewSpaces } from './spaces/main';
import { UserProfileOverviewYour } from './your/main';

export function UserProfileOverviewPages() {
  const profileController = useContext(ContextForProfile);

  return (
    <div className='w-full p-[2rem]' style={{ height: 'calc(100% - 4rem)' }}>
      <div className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex w-full flex-col'>
          {profileController.state.page === ProfilePage.Overview && (
            <UserProfileOverviewYour />
          )}
          {profileController.state.page === ProfilePage.Storyline && (
            <UserProfileOverviewSpaces />
          )}
        </div>
      </div>
    </div>
  );
}
