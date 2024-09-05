import { SpaceSpotlightDescription } from './description/main';
import { SpaceSpotlightMainSpotlight } from './spotlight/main';
import { SpaceSpotlightTitle } from './title/main';

export function SpaceSpotlightMain() {
  return (
    <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
      <SpaceSpotlightTitle />
      <SpaceSpotlightMainSpotlight />
      <SpaceSpotlightDescription />
    </div>
  );
}
