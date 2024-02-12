import { useStarModal } from '@/(cosmos)/(modals)/star-modal/main';
import { DraftHeaderFileButton } from './file/main';
import { DraftHeaderLinkButton } from './link/main';
import { DraftHeaderLogButton } from './log/main';
import { DraftHeaderNoteButton } from './note/main';
import { DraftHeaderElementsButton } from './stack/main';

export function DraftHeaderLeft() {
  const modalContext = useStarModal();
  return (
    <div className='flex w-1/3 flex-row'>
      <DraftHeaderElementsButton
        onClick={() => {
          modalContext.addElementsStaModal.open();
          alert('afdsafsd');
        }}
      />
      <DraftHeaderNoteButton
        onClick={() => modalContext.addNoteStarModal.open()}
      />
      <DraftHeaderLogButton
        onClick={() => modalContext.addLogStarModal.open()}
      />
      <DraftHeaderLinkButton
        onClick={() => modalContext.addLinkStarModal.open()}
      />
      <DraftHeaderFileButton
        onClick={() => modalContext.addFileStarModal.open()}
      />
    </div>
  );
}
