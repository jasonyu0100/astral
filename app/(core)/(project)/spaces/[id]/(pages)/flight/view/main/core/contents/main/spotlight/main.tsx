import { SpacesFlightCarousel } from './carousel/main';
import { SpacesFlightKarma } from './karma/main';

export function SpacesFlightMainSpotlight() {
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[3rem]'>
      <SpacesFlightCarousel />
      <SpacesFlightKarma />
    </div>
  );
}
