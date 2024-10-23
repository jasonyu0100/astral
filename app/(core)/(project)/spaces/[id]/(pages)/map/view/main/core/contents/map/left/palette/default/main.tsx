import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralEditNoteIcon } from '@/icons/edit-note/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralVoiceIcon } from '@/icons/voice/main';
import { useContext } from 'react';

export function SpacesMapPaletteSelected() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <>
      <AstralVoiceIcon onClick={() => alert('Coming soon...')} />
      <AstralLinkIcon
        onClick={() => modalController.addWebsiteUrlIdeaController.open()}
      />
      <AstralEditNoteIcon
        onClick={() => modalController.addTextIdeaController.open()}
      />
      <div className='flex items-center justify-center rounded-full bg-blue-500 p-[0.5rem]'>
        <AstralAddIcon
          onClick={() => modalController.addFileIdeaController.open()}
        />
      </div>
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
