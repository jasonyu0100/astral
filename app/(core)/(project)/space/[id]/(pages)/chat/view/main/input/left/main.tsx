import { AstralAttachmentIcon } from '@/icons/attachment/main';
import { useContext } from 'react';
import { ContextForSpaceChatModals } from '../../../../modal/controller/main';

export function SpaceChatInputLeft() {
  const modalController = useContext(ContextForSpaceChatModals);
  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 items-center justify-center'>
      <AstralAttachmentIcon
        onClick={() => {
          modalController.addAttachmentController.open();
        }}
      />
    </div>
  );
}
