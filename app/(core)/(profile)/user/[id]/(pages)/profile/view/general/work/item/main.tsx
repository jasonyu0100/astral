import { UserProfileGeneralWorkItemAbout } from './about/main';
import { UserProfileGeneralContribution } from './contribution/main';
import { UserProfileGeneralDate } from './date/main';
import { UserProfileRowNumber } from './number/main';
import { UserProfileGeneralWorkViews } from './views/main';

export function UserProfileWorkItem() {
  return (
    <div className='flex w-full flex-row items-center py-[1rem]'>
      <div className='flex w-[5rem] flex-shrink-0'>
        <UserProfileRowNumber />
      </div>
      <div className='grid flex-grow grid-cols-6 items-center'>
        <UserProfileGeneralWorkItemAbout />
        <div />
        <UserProfileGeneralContribution />
        <UserProfileGeneralWorkViews />
        <div></div>
        <UserProfileGeneralDate />
      </div>
    </div>
  );
}
