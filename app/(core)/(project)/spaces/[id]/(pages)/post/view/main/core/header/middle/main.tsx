import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useContext } from 'react';
import { ContextForSpacesPostModals } from '../../../../../modal/controller/main';

export function SpacesPostHeaderMiddle() {
  const spacesBoardModalController = useContext(ContextForSpacesPostModals);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <div
        className='flex cursor-pointer flex-row space-x-[1rem]'
        onClick={() => {
          spacesBoardModalController.editSpaceController.open();
        }}
      >
        <p className='text-center text-lg font-bold text-slate-300'>
          {spaceMainController.state.obj?.title?.trim() || 'Untitled'}
        </p>
        <AstralChevronRightIcon />
      </div>
    </div>
  );
}
