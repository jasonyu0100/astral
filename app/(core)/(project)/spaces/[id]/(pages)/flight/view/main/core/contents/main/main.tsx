import { SpacesFlightDescription } from './description/main';
import { SpacesFlightMainSpotlight } from './spotlight/main';
import { SpacesFlightTitle } from './title/main';

export function SpacesFlightMain() {
  return (
    <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
      <SpacesFlightTitle />
      <SpacesFlightMainSpotlight />
      <SpacesFlightDescription />
    </div>
  );
}
