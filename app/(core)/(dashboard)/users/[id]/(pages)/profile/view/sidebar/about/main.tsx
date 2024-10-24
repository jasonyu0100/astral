import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { UserProfileAboutAction } from './action/main';
import { UserProfileAboutBio } from './bio/main';
import { UserProfileAboutConnections } from './connections/main';
import { UserProfileAboutDetails } from './details/main';

export function UserProfileAbout() {
  return (
    <div className='flex h-full  w-full flex-col space-y-[1rem] p-[2rem]'>
      <UserProfileAboutDetails />
      <UserProfileAboutConnections />
      <UserProfileAboutAction />
      <HorizontalDivider />
      <UserProfileAboutBio />
    </div>
  );
}
