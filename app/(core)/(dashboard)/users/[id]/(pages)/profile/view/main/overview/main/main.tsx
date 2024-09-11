import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileOverviewAbout } from './about/main';
import { UserProfileOverviewKarma } from './karma/main';
import { UserProfileOverviewProjects } from './projects/main';

export function UserProfileOverviewPages() {
  const profileController = useContext(ContextForProfile);

  return (
    <div
      className='flex w-full flex-col overflow-auto p-[2rem]'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {profileController.state.page === ProfilePage.About && (
        <UserProfileOverviewAbout />
      )}
      {/* {profileController.state.page === ProfilePage.Story && (
        <UserProfileOverviewStory />
      )} */}
      {profileController.state.page === ProfilePage.Projects && (
        <UserProfileOverviewProjects />
      )}
      {profileController.state.page === ProfilePage.Contribution && (
        <UserProfileOverviewKarma />
      )}
    </div>
  );
}
