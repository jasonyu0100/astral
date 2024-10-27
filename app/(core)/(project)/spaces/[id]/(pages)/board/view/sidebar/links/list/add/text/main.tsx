import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesBoardModals } from '../../../../../../modal/controller/main';

export function SpaceBoardSidebarAddText() {
  const modalController = useContext(ContextForSpacesBoardModals);

  return (
    <div className='flex aspect-square w-full flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500'>
      <div
        className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          modalController.addTextLinkController.open();
        }}
      >
        <AstralAddIcon />
      </div>
    </div>
  );
}
