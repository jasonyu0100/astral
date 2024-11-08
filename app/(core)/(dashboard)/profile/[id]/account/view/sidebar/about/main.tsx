import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ProfileAboutAction } from './action/main';
import { ProfileAboutBio } from './bio/main';
import { ProfileAboutConnections } from './connections/main';
import { ProfileAboutDetails } from './details/main';

export function ProfileAbout() {
  return (
    <div className='flex h-full  w-full flex-col space-y-[1rem] p-[2rem]'>
      <ProfileAboutDetails />
      <ProfileAboutConnections />
      <ProfileAboutAction />
      <HorizontalDivider />
      <ProfileAboutBio />
    </div>
  );
}
