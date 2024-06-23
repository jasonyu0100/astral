import { SpaceSessionUpdateFormSave } from './action/save/main';
import { SpaceSessionUpdateFormCollaborators } from './collabs/main';
import { SpaceSessionUpdateFormDetails } from './details/main';
import { SpaceSessionUpdateHeader } from './header/main';
import { SpaceSessionUpdateFormMore } from './more/main';
import { SpaceSessionUpdateFormPercent } from './percent/main';

export function SpaceSessionUpdateForm() {
  return (
    <div className='h-full w-full max-w-[800px] overflow-auto border-l-[1px] border-r-[1px] border-slate-500 border-opacity-30'>
      <div className='h-full w-full px-[4rem]'>
        <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
          <SpaceSessionUpdateHeader />
          <div className='flex w-full flex-col space-y-[1rem]'>
            <SpaceSessionUpdateFormDetails />
            <SpaceSessionUpdateFormPercent />
            <SpaceSessionUpdateFormCollaborators />
            <br />
            <SpaceSessionUpdateFormMore />
          </div>
          <SpaceSessionUpdateFormSave />
        </div>
      </div>
    </div>
  );
}
