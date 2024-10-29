import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesSceneModals } from '../../../../modal/controller/main';

export function SpacesSceneSidebarChaptersAdd() {
  const spacesSceneModalController = useContext(ContextForSpacesSceneModals);

  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <button
        className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          spacesSceneModalController.addChapterController.open();
        }}
      >
        <AstralAddIcon />
      </button>
    </div>
  );
}
