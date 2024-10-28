import { SpacesPostComments } from '../comments/main';
import { SpacesPostDescription } from './description/main';
import { SpacesPostMainPost } from './post/main';
import { SpacesPostTitle } from './title/main';

export function SpacesPostMain() {
  return (
    <div className='flex flex-grow flex-col'>
      <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
        <SpacesPostMainPost />
        <SpacesPostTitle />
        <SpacesPostDescription />
      </div>
      <SpacesPostComments />
    </div>
  );
}
