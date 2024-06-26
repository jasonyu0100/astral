import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { SpaceSessionUpdateFormSave } from './action/save/main';
import { SpaceSessionUpdateFormDetails } from './details/main';
import { SpaceSessionUpdateHeader } from './header/main';
import { SpaceSessionUpdateFormContributors } from './members/main';
import { SpaceSessionSessionUpdates } from './updates/main';

export function SpaceSessionUpdateForm() {
  return (
    <div className='h-full w-full max-w-[800px] overflow-auto border-l-[1px] border-r-[1px] border-slate-500 border-opacity-30'>
      <div className='h-full w-full px-[4rem]'>
        <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
          <SpaceSessionUpdateHeader />
          <SpaceSessionSessionUpdates />
          <HorizontalDivider />
          <SpaceSessionUpdateFormDetails />
          <SpaceSessionUpdateFormContributors />
          <SpaceSessionUpdateFormSave />
        </div>
      </div>
    </div>
  );
}
