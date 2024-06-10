import {
  StarModalContext,
} from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/idea/main';
import { MapHeaderFileButton } from './file/main';
import { MapHeaderLinkButton } from './link/main';
import { MapHeaderNoteButton } from './note/main';
import { useContext } from 'react';
import { ToggleMapModalButton } from '../../../common/toggle/main';

export function DefaultLeft() {
  const modalContext = useContext(StarModalContext);

  return (
    <div className='flex w-1/3 flex-row'>
      <ToggleMapModalButton/>
      <MapHeaderFileButton
        onClick={() => modalContext.addFileStarModal.open()}
      />
      <MapHeaderNoteButton
        onClick={() => modalContext.addNoteStarModal.open()}
      />
      <MapHeaderLinkButton
        onClick={() => modalContext.addLinkStarModal.open()}
      />
    </div>
  );
}
