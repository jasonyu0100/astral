import { SpacesPostDescription } from './description/main';
import { SpacesPostMainPost } from './post/main';
import { SpacesPostTitle } from './title/main';

export function SpacesPostMain() {
  return (
    <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
      <SpacesPostTitle />
      <SpacesPostMainPost />
      <SpacesPostDescription />
    </div>
  );
}
