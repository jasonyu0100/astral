import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralNoteIcon } from '@/icons/note/main';
import { AstralPlayCircleIcon } from '@/icons/play-circle/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { useContext } from 'react';

export function SpacesMapPaletteSelected() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <>
      <AstralAddIcon onClick={modalController.addFileIdeaController.open} />
      <AstralNoteIcon
        onClick={() => modalController.addTextIdeaController.open()}
      />
      <AstralPlayCircleIcon
        onClick={() => modalController.addUrlIdeaController.open()}
      />
      <AstralAlbumIcon />
      <AstralSearchIcon
        onClick={() => modalController.addSearchIdeaController.open()}
      />
      <AstralManufacturingIcon
        onClick={() => modalController.addGenerateIdeaController.open()}
      />
    </>
  );
}
