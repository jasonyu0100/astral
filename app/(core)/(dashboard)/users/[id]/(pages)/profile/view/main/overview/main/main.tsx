import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileOverviewAbout } from './about/main';
import { UserProfileOverviewProjects } from './projects/main';

export function UserProfileOverviewPages() {
  const profileController = useContext(ContextForProfile);

  return (
    <div className='w-full p-[2rem]' style={{ height: 'calc(100% - 4rem)' }}>
      <div className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex w-full flex-col'>
          {profileController.state.page === ProfilePage.Highlights && (
            <UserProfileOverviewAbout />
          )}
          {/* {profileController.state.page === ProfilePage.Story && (
            <UserProfileOverviewStory />
          )} */}
          {profileController.state.page === ProfilePage.Spaces && (
            <UserProfileOverviewProjects />
          )}
          {/* {profileController.state.page === ProfilePage.Aura && (
            <UserProfileOverviewKarma />
          )} */}
        </div>
      </div>
    </div>
  );
}
