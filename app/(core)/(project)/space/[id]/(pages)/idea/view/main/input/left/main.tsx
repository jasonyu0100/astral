import { AstralAttachmentIcon } from '@/icons/attachment/main';
import { useContext } from 'react';
import { ContextForSpaceIdeaModals } from '../../../../modal/controller/main';

export function SpaceIdeaInputLeft() {
  const modalController = useContext(ContextForSpaceIdeaModals);
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
