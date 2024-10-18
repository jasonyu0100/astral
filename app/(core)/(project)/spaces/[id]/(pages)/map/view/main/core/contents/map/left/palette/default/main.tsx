import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralEditNoteIcon } from '@/icons/edit-note/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { useContext } from 'react';

export function SpacesMapPaletteSelected() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <>
      <AstralAddIcon onClick={modalController.addFileIdeaController.open} />
      <AstralEditNoteIcon
        onClick={() => modalController.addTextIdeaController.open()}
      />
      <AstralManufacturingIcon
        onClick={() => modalController.addGenerateIdeaController.open()}
      />
      <AstralSmartDisplayIcon
        onClick={() => modalController.addYouTubeUrlIdeaController.open()}
      />
      <AstralAlbumIcon
        onClick={() => modalController.addSpotifyUrlIdeaController.open()}
      />
    </>
  );
}
