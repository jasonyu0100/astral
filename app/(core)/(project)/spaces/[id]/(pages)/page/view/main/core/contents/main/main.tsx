import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesPageComments } from '../comments/main';
import { SpacesPageKarma } from './description/karma/main';
import { SpacesPageDescription } from './description/main';
import { SpacesPageMainPost } from './post/main';
import { SpacesPageTitle } from './title/main';

export function SpacesPageMain() {
  return (
    <div className='flex flex-grow flex-col'>
      <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
        <SpacesPageMainPost />
        <HorizontalDivider />
        <div className='flex flex-row items-center justify-between space-x-[1rem]'>
          <div className='flex w-full flex-col'>
            <SpacesPageTitle />
            <SpacesPageDescription />
          </div>
          <SpacesPageKarma />
        </div>
        <HorizontalDivider />
      </div>
      <SpacesPageComments />
    </div>
  );
}
