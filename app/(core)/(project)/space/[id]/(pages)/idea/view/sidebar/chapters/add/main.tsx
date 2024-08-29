import { useContext } from 'react';
import { ContextForSpaceIdeaModals } from '../../../../modal/controller/main';

export function SpaceIdeaSidebarChaptersAdd() {
  const modalController = useContext(ContextForSpaceIdeaModals);

  return (
    <button
      className='mt-[1rem] flex w-full'
      onClick={() => {
        modalController.addChapterController.open();
      }}
    >
      <p className='animate-pulse-slow font-extraBold text-xl text-slate-400'>
        Add Chapter
      </p>
    </button>
  );
}
