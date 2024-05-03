import {
  StarModalContext,
} from '@/(cx)/(studio)/(modals)/star-modal/main';
import { MapHeaderFileButton } from './file/main';
import { MapHeaderLinkButton } from './link/main';
import { MapHeaderLogButton } from './log/main';
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
      <MapHeaderLogButton/>
      <MapHeaderNoteButton
        onClick={() => modalContext.addNoteStarModal.open()}
      />
      <MapHeaderLinkButton
        onClick={() => modalContext.addLinkStarModal.open()}
      />
    </div>
  );
}
