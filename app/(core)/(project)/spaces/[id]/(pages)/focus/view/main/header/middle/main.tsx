import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';
import { ContextForSpacesFocusModals } from '../../../../modal/controller/main';

export function SpacesFocusHeaderMiddle() {
  const spacesFocusModalController = useContext(ContextForSpacesFocusModals);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <div
        className='flex cursor-pointer flex-row space-x-[1rem]'
        onClick={() => {
          spacesFocusModalController.editSpaceController.open();
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
