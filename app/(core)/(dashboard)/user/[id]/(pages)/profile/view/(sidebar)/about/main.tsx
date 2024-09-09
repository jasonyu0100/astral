import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { ContextForUserProfile } from '../../../controller/main';
import { ProfileAboutBackAction } from './action/back/main';
import { ProfileAboutConnectAction } from './action/connect/main';
import { ProfileAboutEditAction } from './action/edit/main';
import { ProfileAboutBio } from './bio/main';
import { ProfileAboutDetails } from './details/main';
import { ProfileAboutFollowing } from './following/main';

export function UserProfileAbout() {
  const {
    state: { adminMode },
  } = useContext(ContextForUserProfile);
  return (
    <>
      <ProfileAboutDetails />
      <ProfileAboutFollowing />
      {adminMode ? (
        <ProfileAboutEditAction />
      ) : (
        <div className='flex w-full flex-col space-y-[1rem]'>
          <ProfileAboutConnectAction />
          <ProfileAboutBackAction />
        </div>
      )}
      <HorizontalDivider />
      <ProfileAboutBio />
      <HorizontalDivider />
    </>
  );
}
