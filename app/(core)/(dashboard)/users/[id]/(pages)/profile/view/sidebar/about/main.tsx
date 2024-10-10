import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { UserProfileAboutAction } from './action/main';
import { UserProfileAboutBio } from './bio/main';
import { UserProfileAboutDetails } from './details/main';
import { UserProfileAboutFollowers } from './followers/main';
import { UserProfileAboutFollowing } from './following/main';

export function UserProfileAbout() {
  return (
    <div className='flex h-full  w-full flex-col space-y-[1rem] p-[2rem]'>
      <UserProfileAboutDetails />
      <UserProfileAboutFollowing />
      <UserProfileAboutFollowers />
      <UserProfileAboutAction />
      <HorizontalDivider />
      <UserProfileAboutBio />
    </div>
  );
}
