import { SpacesPostContainer } from './carousel/main';
import { SpacesPostKarma } from './karma/main';

export function SpacesPostMainPost() {
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[3rem]'>
      <SpacesPostContainer />
      <SpacesPostKarma />
    </div>
  );
}
