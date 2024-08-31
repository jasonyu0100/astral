import { ContextForSpaceChatModals } from '@/(core)/(project)/space/[id]/(pages)/chat/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';

export function SpaceChatSidebarSceneAdd() {
  const modalController = useContext(ContextForSpaceChatModals);

  return (
    <>
      <button
        className='flex w-full flex-row items-center space-x-[1rem]'
        onClick={() => modalController.addSceneController.open()}
      >
        <div className='flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-blue-500'>
          <AstralAddIcon className='h-3/4 w-3/4' />
        </div>
        <p className='font-light text-slate-300'>Add</p>
      </button>
    </>
  );
}
