import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralEditNoteIcon } from '@/icons/edit-note/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralUploadIcon } from '@/icons/upload/main';
import { useContext } from 'react';

export function SpacesMapPaletteSelected() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <>
      <AstralUploadIcon onClick={modalController.addFileIdeaController.open} />
      <AstralEditNoteIcon
        onClick={() => modalController.addTextIdeaController.open()}
      />
      <AstralSmartDisplayIcon
        onClick={() => modalController.addYouTubeUrlIdeaController.open()}
      />
      <AstralManufacturingIcon
        onClick={() => modalController.addGenerateIdeaController.open()}
      />
      <AstralAlbumIcon
        onClick={() => modalController.addSpotifyUrlIdeaController.open()}
      />
    </>
  );
}
