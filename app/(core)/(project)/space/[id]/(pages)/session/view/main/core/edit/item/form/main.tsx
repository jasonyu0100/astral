import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { SpaceSessionItemFormUpdate } from './action/update/main';
import { SpaceSessionItemFormCollaborators } from './collabs/main';
import { SpaceSessionItemFormDetails } from './details/main';
import { SpaceSessionItemFormHeader } from './header/main';

export function SpaceSessionItemForm() {
  return (
    <div className='h-full w-full max-w-[800px] overflow-auto border-l-[1px] border-r-[1px] border-slate-500 border-opacity-30'>
      <div className='h-full w-full px-[4rem]'>
        <div className='flex h-full flex-grow flex-col justify-around space-y-[1rem]'>
          <SpaceSessionItemFormHeader />
          <div className='flex flex-col space-y-[0.5rem]'>
            <p className='text-sm font-bold text-slate-300'>Summary</p>
            <p className='text-sm text-slate-500'>
              This is a summary of the update
            </p>
          </div>
          <HorizontalDivider />
          <SpaceSessionItemFormDetails />
          <SpaceSessionItemFormCollaborators />
          <SpaceSessionItemFormUpdate />
        </div>
      </div>
    </div>
  );
}
