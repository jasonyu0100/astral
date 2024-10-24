import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';
import { ContextForSpacesChatModals } from '../../../../../modal/controller/main';
import SpacesChatHeaderMiddleTitle from './title/main';

export function SpacesChatHeaderMiddle() {
  const modalController = useContext(ContextForSpacesChatModals);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <div
        className='flex cursor-pointer flex-row space-x-[1rem]'
        onClick={() => {
          modalController.editSpaceController.open();
        }}
      >
        <SpacesChatHeaderMiddleTitle />
        <AstralChevronRightIcon />
      </div>
    </div>
  );
}
