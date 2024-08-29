import { AstralAddIcon } from '@/icons/add/main';
import { AstralFileIcon } from '@/icons/file/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralNoteIcon } from '@/icons/note/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapPaletteSelected() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <>
      <AstralAddIcon onClick={modalController.addFileIdeaController.open} />
      <AstralNoteIcon
        onClick={() => modalController.addTextIdeaController.open()}
      />
      <AstralFileIcon
        onClick={() => modalController.addFileIdeaController.open()}
      />
      <AstralLinkIcon
        onClick={() => modalController.addUrlIdeaController.open()}
      />
      <AstralManufacturingIcon onClick={() => alert('Coming soon...')} />
    </>
  );
}
