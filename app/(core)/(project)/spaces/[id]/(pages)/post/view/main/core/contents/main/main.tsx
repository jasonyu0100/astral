import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesPostComments } from '../comments/main';
import { SpacesPostDescription } from './description/main';
import { SpacesPostMainPost } from './post/main';

export function SpacesPostMain() {
  return (
    <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
      <SpacesPostDescription />
      <SpacesPostMainPost />
      <HorizontalDivider />
      <SpacesPostComments />
    </div>
  );
}
