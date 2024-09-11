import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileTextTab } from './text-tab/main';

export function UserProfileHeader() {
  const profileController = useContext(ContextForProfile);
  console.log(profileController);
  return (
    <div className='flex h-[4rem] py-[1rem] shadow-glow'>
      <div className='grid w-full grid-cols-4 items-center justify-items-center'>
        {Object.keys(ProfilePage).map((page) => (
          <UserProfileTextTab
            active={profileController.state.page === page}
            onClick={() => profileController.actions.updatePage(page)}
          >
            {page}
          </UserProfileTextTab>
        ))}
      </div>
    </div>
  );
}
