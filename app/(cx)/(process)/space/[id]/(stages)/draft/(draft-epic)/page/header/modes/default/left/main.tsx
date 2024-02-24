import {
  StarModalContext,
} from '@/(modals)/star-modal/main';
import { DraftHeaderFileButton } from './file/main';
import { DraftHeaderLinkButton } from './link/main';
import { DraftHeaderLogButton } from './log/main';
import { DraftHeaderNoteButton } from './note/main';
import { useContext } from 'react';
import { DraftHeaderToggleButton } from '../../common/toggle/main';

export function DraftHeaderDefaultLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <DraftHeaderToggleButton/>
      <DraftHeaderFileButton
        onClick={() => modalContext.addFileStarModal.open()}
      />
      <DraftHeaderLogButton/>
      <DraftHeaderNoteButton
        onClick={() => modalContext.addNoteStarModal.open()}
      />
      <DraftHeaderLinkButton
        onClick={() => modalContext.addLinkStarModal.open()}
      />
    </div>
  );
}
