import { SpaceFlightCarousel } from './carousel/main';
import { SpaceFlightKarma } from './karma/main';

export function SpaceFlightMainSpotlight() {
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[3rem]'>
      <SpaceFlightCarousel />
      <SpaceFlightKarma />
    </div>
  );
}
