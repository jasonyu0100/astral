import { SpacesFlightDescription } from './description/main';
import { SpacesFlightMainPost } from './post/main';
import { SpacesFlightTitle } from './title/main';

export function SpacesFlightMain() {
  return (
    <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
      <SpacesFlightTitle />
      <SpacesFlightMainPost />
      <SpacesFlightDescription />
    </div>
  );
}
