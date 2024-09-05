import { SpaceSpotlightCarousel } from './carousel/main';
import { SpaceSpotlightKarma } from './karma/main';

export function SpaceSpotlightMainSpotlight() {
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[3rem]'>
      <SpaceSpotlightCarousel />
      <SpaceSpotlightKarma />
    </div>
  );
}
