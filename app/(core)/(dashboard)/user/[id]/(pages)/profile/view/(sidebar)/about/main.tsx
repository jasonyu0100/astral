import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { UserProfileAboutAction } from './action/main';
import { UserProfileAboutBio } from './bio/main';
import { UserProfileAboutDetails } from './details/main';
import { UserProfileAboutFollowing } from './following/main';

export function UserProfileAbout() {
  return (
    <>
      <UserProfileAboutDetails />
      <UserProfileAboutFollowing />
      <UserProfileAboutAction />
      <HorizontalDivider />
      <UserProfileAboutBio />
    </>
  );
}
