import { ContextForSpacesSpaceModals } from '@/(core)/(project)/spaces/[id]/(pages)/space/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';

export function SpacesSpaceSidebarSceneAdd() {
  const modalController = useContext(ContextForSpacesSpaceModals);

  return (
    <div
      className='flex w-full flex-row items-center space-x-[1rem]'
      onClick={() => modalController.addSceneController.open()}
    >
      <div className='flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-blue-500'>
        <AstralAddIcon className='h-3/4 w-3/4' />
      </div>
      <p className='font-light text-slate-300'>Add</p>
    </div>
  );
}
