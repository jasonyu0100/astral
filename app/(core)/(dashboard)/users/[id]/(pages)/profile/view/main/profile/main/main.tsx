import { useContext } from 'react';
import { UserProfileAbout } from '../../../sidebar/about/main';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileKarma } from './karma/main';
import { UserProfileProjects } from './projects/main';
import { UserProfileStory } from './story/main';

export function UserProfileMain() {
  const profileController = useContext(ContextForProfile);

  return (
    <div
      className='flex w-full flex-col overflow-auto p-[2rem]'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {profileController.state.page === ProfilePage.About && (
        <UserProfileAbout />
      )}
      {profileController.state.page === ProfilePage.Story && (
        <UserProfileStory />
      )}
      {profileController.state.page === ProfilePage.Projects && (
        <UserProfileProjects />
      )}
      {profileController.state.page === ProfilePage.Karma && (
        <UserProfileKarma />
      )}
    </div>
  );
}
