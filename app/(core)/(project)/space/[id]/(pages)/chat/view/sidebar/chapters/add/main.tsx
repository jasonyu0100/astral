import { useContext } from 'react';
import { ContextForSpaceChatModals } from '../../../../modal/controller/main';

export function SpaceChatSidebarChaptersAdd() {
  const modalController = useContext(ContextForSpaceChatModals);

  return (
    <button
      className='mt-[1rem] flex w-full'
      onClick={() => {
        modalController.addChapterController.open();
      }}
    >
      <p className='animate-pulse-slow font-extraBold text-xl text-slate-300'>
        Add Chapter
      </p>
    </button>
  );
}
