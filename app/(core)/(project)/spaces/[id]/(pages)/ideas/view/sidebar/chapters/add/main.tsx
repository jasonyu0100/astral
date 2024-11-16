import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesIdeasModals } from '../../../../modal/controller/main';

export function SpacesIdeasSidebarChaptersAdd() {
  const spacesSpaceModalController = useContext(ContextForSpacesIdeasModals);

  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <button
        className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          spacesSpaceModalController.addChapterController.open();
        }}
      >
        <AstralAddIcon />
      </button>
    </div>
  );
}
