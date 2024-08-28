import { AstralAddIcon } from '@/icons/add/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { ContextForSpaceIdeaModals } from '../../../../../../modal/controller/main';

export function SpaceIdeaSceneChatAdd() {
  const modalController = useContext(ContextForSpaceIdeaModals);

  return (
    <>
      <button
        className='flex w-full flex-row items-center space-x-[1rem]'
        onClick={() => modalController.addSceneController.open()}
      >
        <GlassAreaContainer
          name={SpaceIdeaSceneChatAdd.name}
          sizeFx='w-[3rem] h-[3rem] rounded-full overflow-hidden'
          glassFx='bg-gradient-to-r from-slate-100 to-slate-500 opacity-10'
          className={`flex flex-col items-center justify-center`}
        >
          <AstralAddIcon className='h-1/2 w-1/2' />
        </GlassAreaContainer>
        <p className='text-lg font-bold text-slate-500'>New Chat</p>
      </button>
    </>
  );
}
