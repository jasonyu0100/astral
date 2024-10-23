import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';
import { ContextForSpacesConversationModals } from '../../../../../modal/controller/main';
import SpacesConversationHeaderMiddleTitle from './title/main';

export function SpacesConversationHeaderMiddle() {
  const modalController = useContext(ContextForSpacesConversationModals);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <div
        className='flex cursor-pointer flex-row space-x-[1rem]'
        onClick={() => {
          modalController.editSpaceController.open();
        }}
      >
        <SpacesConversationHeaderMiddleTitle />
        <AstralChevronRightIcon />
      </div>
    </div>
  );
}
