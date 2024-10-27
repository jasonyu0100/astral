import { ContextForSpacesSceneModals } from '@/(core)/(project)/spaces/[id]/(pages)/scene/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralArrowDropUp } from '@/icons/arrow-drop-up/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { AstralNoteIcon } from '@/icons/note/main';
import { AstralRectangleIcon } from '@/icons/rectangle/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralVideoCamIcon } from '@/icons/video-cam/main';
import { AstralVoiceIcon } from '@/icons/voice/main';
import { useContext, useState } from 'react';

export function SpacesScenePaletteDefault() {
  const modalController = useContext(ContextForSpacesSceneModals);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center rounded-full bg-blue-500 p-[0.5rem]'>
        <AstralAddIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => modalController.addFileIdeaController.open()}
        />
      </div>
      <AstralNoteIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addStickyIdeaController.open()}
      />
      <AstralRectangleIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addArticleIdeaController.open()}
      />
      <AstralSearchIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addSearchIdeaController.open()}
      />
      <AstralSmartDisplayIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addYouTubeUrlIdeaController.open()}
      />
      {showMore && (
        <>
          <AstralAlbumIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => modalController.addSpotifyUrlIdeaController.open()}
          />
          <AstralManufacturingIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => modalController.addGenerateIdeaController.open()}
          />
          <AstralLinkIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => modalController.addWebsiteUrlIdeaController.open()}
          />
          <AstralVoiceIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => alert('Coming soon...')}
          />
          <AstralVideoCamIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => alert('Coming soon...')}
          />
        </>
      )}
      <div className='flex items-center justify-center rounded-full bg-purple-500 p-[0.5rem]'>
        {showMore ? (
          <AstralArrowDropUp
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              setShowMore(false);
            }}
          />
        ) : (
          <AstralMoreVertIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              setShowMore(true);
            }}
          />
        )}
      </div>
    </>
  );
}
