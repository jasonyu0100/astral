import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesUpdatesPostComments } from './comments/main';
import { SpacesUpdatesPostContents } from './contents/main';
import { SpacesUpdatesPostDescription } from './description/main';

export function SpacesUpdatesMainPost() {
  return (
    <div
      className='flex w-full flex-col space-y-[2rem] py-[2rem]'
      style={{ height: '100%' }}
    >
      <SpacesUpdatesPostContents />
      <SpacesUpdatesPostDescription />
      <HorizontalDivider />
      <SpacesUpdatesPostComments />
    </div>
  );
}
