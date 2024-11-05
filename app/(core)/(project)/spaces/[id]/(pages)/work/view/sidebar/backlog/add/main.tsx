import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesWorkModals } from '../../../../modal/controller/main';

export function SpacesWorkSidebarBacklogAdd() {
  const modalController = useContext(ContextForSpacesWorkModals);

  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <button
        className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          modalController.addBacklogTaskController.open();
        }}
      >
        <AstralAddIcon />
      </button>
    </div>
  );
}
