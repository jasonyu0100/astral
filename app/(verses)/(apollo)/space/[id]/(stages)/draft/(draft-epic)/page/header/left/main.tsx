import {
  StarModalContext,
} from '@/(verses)/(modals)/star-modal/main';
import { DraftHeaderFileButton } from './file/main';
import { DraftHeaderLinkButton } from './link/main';
import { DraftHeaderLogButton } from './log/main';
import { DraftHeaderNoteButton } from './note/main';
import { DraftHeaderElementsButton } from './stack/main';
import { useContext } from 'react';

export function DraftHeaderLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <DraftHeaderElementsButton
        onClick={() => {
          modalContext.addElementsStarModal.open();
        }}
      />
      <DraftHeaderFileButton
        onClick={() => modalContext.addFileStarModal.open()}
      />
      <DraftHeaderLinkButton
        onClick={() => modalContext.addLinkStarModal.open()}
      />
      <DraftHeaderNoteButton
        onClick={() => modalContext.addNoteStarModal.open()}
      />
      <DraftHeaderLogButton
        onClick={() => modalContext.addLogStarModal.open()}
      />
    </div>
  );
}
