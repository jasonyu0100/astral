import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesLaunchPostComments } from './comments/main';
import { SpacesLaunchPostContents } from './contents/main';
import { SpacesLaunchPostDescription } from './description/main';

export function SpacesLaunchMainPost() {
  return (
    <div
      className='flex w-full flex-col space-y-[2rem] py-[2rem]'
      style={{ height: '100%' }}
    >
      <SpacesLaunchPostContents />
      <SpacesLaunchPostDescription />
      <HorizontalDivider />
      <SpacesLaunchPostComments />
    </div>
  );
}
