import { SpacesPostComments } from '../comments/main';
import { SpacesPostKarma } from './description/karma/main';
import { SpacesPostDescription } from './description/main';
import { SpacesPostMainPost } from './post/main';
import { SpacesPostTitle } from './title/main';

export function SpacesPostMain() {
  return (
    <div className='flex flex-grow flex-col'>
      <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
        <div className='flex flex-row items-center justify-between space-x-[1rem]'>
          <div className='flex w-full flex-col'>
            <SpacesPostTitle />
            <SpacesPostDescription />
          </div>
          <SpacesPostKarma />
        </div>
        <SpacesPostMainPost />
      </div>
      <SpacesPostComments />
    </div>
  );
}
