import { useContext } from 'react';
import { ContextForUserProfile } from '../../../../controller/main';
import { ProfileAboutBackAction } from './back/main';
import { ProfileAboutConnectAction } from './connect/main';
import { ProfileAboutEditAction } from './edit/main';

export function UserProfileAboutAction() {
  const {
    state: { adminMode },
  } = useContext(ContextForUserProfile);
  return (
    <>
      {adminMode ? (
        <ProfileAboutEditAction />
      ) : (
        <div className='flex w-full flex-col space-y-[1rem]'>
          <ProfileAboutConnectAction />
          <ProfileAboutBackAction />
        </div>
      )}
    </>
  );
}
