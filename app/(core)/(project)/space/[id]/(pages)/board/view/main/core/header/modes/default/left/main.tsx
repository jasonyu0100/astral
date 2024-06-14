import { StarModalContext } from '@/(core)/(project)/space/[id]/(pages)/board/(modal)/idea/main';
import { BoardHeaderFileButton } from './file/main';
import { BoardHeaderLinkButton } from './link/main';
import { BoardHeaderNoteButton } from './note/main';
import { useContext } from 'react';
import { ToggleBoardModalButton } from '../../../common/toggle/main';

export function DefaultLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleBoardModalButton />
      <BoardHeaderFileButton
        onClick={() => modalContext.addFileStarModal.open()}
      />
      <BoardHeaderNoteButton
        onClick={() => modalContext.addNoteStarModal.open()}
      />
      <BoardHeaderLinkButton
        onClick={() => modalContext.addLinkStarModal.open()}
      />
    </div>
  );
}
