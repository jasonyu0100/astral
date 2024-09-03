import { AstralAddIcon } from '@/icons/add/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralNoteIcon } from '@/icons/note/main';
import { AstralSearchIcon } from '@/icons/search/main';
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
      <AstralLinkIcon
        onClick={() => modalController.addUrlIdeaController.open()}
      />
      <AstralSearchIcon
        onClick={() => modalController.addSearchIdeaController.open()}
      />
      <AstralManufacturingIcon
        onClick={() => modalController.addGenerateIdeaController.open()}
      />
    </>
  );
}
