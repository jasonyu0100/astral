import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';
import { ContextForSpacesSpaceModals } from '../../../../../modal/controller/main';
import SpacesSpaceHeaderMiddleTitle from './title/main';

export function SpacesSpaceHeaderMiddle() {
  const modalController = useContext(ContextForSpacesSpaceModals);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <div
        className='flex cursor-pointer flex-row space-x-[1rem]'
        onClick={() => {
          modalController.editSpaceController.open();
        }}
      >
        <SpacesSpaceHeaderMiddleTitle />
        <AstralChevronRightIcon />
      </div>
    </div>
  );
}
