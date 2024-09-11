import { useContext } from 'react';
import { ContextForSpacesSpaceModals } from '../../../../modal/controller/main';

export function SpacesSpaceSidebarChaptersAdd() {
  const modalController = useContext(ContextForSpacesSpaceModals);

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
