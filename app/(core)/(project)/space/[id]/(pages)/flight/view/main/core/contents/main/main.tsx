import { SpaceFlightDescription } from './description/main';
import { SpaceFlightMainSpotlight } from './spotlight/main';
import { SpaceFlightTitle } from './title/main';

export function SpaceFlightMain() {
  return (
    <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
      <SpaceFlightTitle />
      <SpaceFlightMainSpotlight />
      <SpaceFlightDescription />
    </div>
  );
}
