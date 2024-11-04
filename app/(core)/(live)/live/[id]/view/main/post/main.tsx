import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { PublicSpacePostComments } from './comments/main';
import { PublicSpacePostContents } from './contents/main';
import { PublicSpacePostDescription } from './description/main';

export function PublicSpacePost() {
  return (
    <div
      className='flex w-full flex-col space-y-[2rem] py-[2rem]'
      style={{ height: '100%' }}
    >
      <PublicSpacePostContents />
      <PublicSpacePostDescription />
      <HorizontalDivider />
      <PublicSpacePostComments />
    </div>
  );
}
