import { ContextForSpacesViewModals } from '@/(core)/(project)/spaces/[id]/(pages)/view/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralArrowDropUp } from '@/icons/arrow-drop-up/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { AstralRectangleIcon } from '@/icons/rectangle/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralSquareIcon } from '@/icons/square/main';
import { AstralVideoCamIcon } from '@/icons/video-cam/main';
import { AstralVoiceIcon } from '@/icons/voice/main';
import { useContext, useState } from 'react';

export function SpacesViewPaletteDefault() {
  const modalController = useContext(ContextForSpacesViewModals);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center rounded-full bg-blue-500 p-[0.5rem]'>
        <AstralAddIcon
          onClick={() => modalController.addFileIdeaController.open()}
        />
      </div>
      <AstralSquareIcon
        onClick={() => modalController.addStickyIdeaController.open()}
      />
      <AstralRectangleIcon
        onClick={() => modalController.addArticleIdeaController.open()}
      />
      <AstralSearchIcon
        onClick={() => modalController.addSearchIdeaController.open()}
      />
      <AstralSmartDisplayIcon
        onClick={() => modalController.addYouTubeUrlIdeaController.open()}
      />
      {showMore && (
        <>
          <AstralAlbumIcon
            onClick={() => modalController.addSpotifyUrlIdeaController.open()}
          />
          <AstralManufacturingIcon
            onClick={() => modalController.addGenerateIdeaController.open()}
          />
          <AstralLinkIcon
            onClick={() => modalController.addWebsiteUrlIdeaController.open()}
          />
          <AstralVoiceIcon onClick={() => alert('Coming soon...')} />
          <AstralVideoCamIcon onClick={() => alert('Coming soon...')} />
        </>
      )}
      {showMore ? (
        <AstralArrowDropUp
          onClick={() => {
            setShowMore(false);
          }}
        />
      ) : (
        <AstralMoreVertIcon
          onClick={() => {
            setShowMore(true);
          }}
        />
      )}
    </>
  );
}
