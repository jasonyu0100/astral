import { SceneIdeaModalContext } from '@/(core)/(project)/space/[id]/(pages)/board/(modal)/idea/main';
import { useContext } from 'react';
import { ToggleBoardModalButton } from '../../../common/toggle/main';
import { BoardHeaderFileButton } from './file/main';
import { BoardHeaderLinkButton } from './link/main';
import { BoardHeaderNoteButton } from './note/main';

export function SpaceBoardDefaultLeft() {
  const modalContext = useContext(SceneIdeaModalContext);

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
