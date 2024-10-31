import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileOverviewSpaces } from './your/main';

export function UserProfileOverviewPages() {
  const profileController = useContext(ContextForProfile);

  return (
    <div className='h-full w-full p-[2rem]'>
      <div className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex w-full flex-col'>
          {profileController.state.page === ProfilePage.Spaces && (
            <UserProfileOverviewSpaces />
          )}
        </div>
      </div>
    </div>
  );
}
