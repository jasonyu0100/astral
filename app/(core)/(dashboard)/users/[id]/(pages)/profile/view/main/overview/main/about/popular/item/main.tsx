import { UserProfileOverviewWorkItemAbout } from './about/main';
import { UserProfileOverviewContribution } from './contribution/main';
import { UserProfileOverviewDate } from './date/main';
import { UserProfileRowNumber } from './number/main';
import { UserProfileOverviewWorkViews } from './views/main';

export function UserProfileWorkItem() {
  return (
    <div className='flex w-full flex-row items-center py-[1rem]'>
      <div className='flex w-[5rem] flex-shrink-0'>
        <UserProfileRowNumber />
      </div>
      <div className='grid flex-grow grid-cols-6 items-center'>
        <UserProfileOverviewWorkItemAbout />
        <div />
        <UserProfileOverviewContribution />
        <UserProfileOverviewWorkViews />
        <div></div>
        <UserProfileOverviewDate />
      </div>
    </div>
  );
}
