import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesPagesComments } from '../comments/main';
import { SpacesPagesKarma } from './description/karma/main';
import { SpacesPagesDescription } from './description/main';
import { SpacesPagesMainPost } from './post/main';
import { SpacesPagesTitle } from './title/main';

export function SpacesPagesMain() {
  return (
    <div className='flex flex-grow flex-col'>
      <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
        <SpacesPagesMainPost />
        <HorizontalDivider />
        <div className='flex flex-row items-center justify-between space-x-[1rem]'>
          <div className='flex w-full flex-col'>
            <SpacesPagesTitle />
            <SpacesPagesDescription />
          </div>
          <SpacesPagesKarma />
        </div>
        <HorizontalDivider />
      </div>
      <SpacesPagesComments />
    </div>
  );
}
