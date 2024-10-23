import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { AstralEditNoteIcon } from '@/icons/edit-note/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralVoiceIcon } from '@/icons/voice/main';
import { useContext } from 'react';

export function SpacesMapPaletteSelected() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <>
      <AstralLinkIcon
        onClick={() => modalController.addWebsiteUrlIdeaController.open()}
      />
      <AstralEditNoteIcon
        onClick={() => modalController.addTextIdeaController.open()}
      />
      <AstralManufacturingIcon
        onClick={() => modalController.addGenerateIdeaController.open()}
      />
      <AstralSearchIcon
        onClick={() => modalController.addSearchIdeaController.open()}
      />
      <div className='flex items-center justify-center rounded-full bg-blue-500 p-[0.5rem]'>
        <AstralAddIcon
          onClick={() => modalController.addFileIdeaController.open()}
        />
      </div>
      <AstralSmartDisplayIcon
        onClick={() => modalController.addYouTubeUrlIdeaController.open()}
      />
      <AstralAlbumIcon
        onClick={() => modalController.addSpotifyUrlIdeaController.open()}
      />
      <AstralVoiceIcon onClick={() => alert('Coming soon...')} />
      <AstralCameraIcon onClick={() => alert('Coming soon...')} />
    </>
  );
}
