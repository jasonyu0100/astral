import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpaceInboxPostComments } from './comments/main';
import { SpaceInboxPostContents } from './contents/main';
import { SpaceInboxPostDescription } from './description/main';

export function SpaceInboxMainPost() {
  return (
    <div
      className='flex w-full flex-col space-y-[2rem] py-[2rem]'
      style={{ height: '100%' }}
    >
      <SpaceInboxPostContents />
      <SpaceInboxPostDescription />
      <HorizontalDivider />
      <SpaceInboxPostComments />
    </div>
  );
}
