import { ContextForSpacesSpaceModals } from '@/(core)/(project)/spaces/[id]/(pages)/space/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralArrowLeft } from '@/icons/arrow-left/main';
import { AstralArticleIcon } from '@/icons/article/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralEditSquareIcon } from '@/icons/edit-square/main';
import { AstralImageIcon } from '@/icons/image/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralMicIcon } from '@/icons/mic/main';
import { AstralMoreIcon } from '@/icons/more/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralVideoCamIcon } from '@/icons/video-cam/main';
import { useContext, useState } from 'react';

export function SpacesSpacePaletteDefault() {
  const modalController = useContext(ContextForSpacesSpaceModals);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center rounded-full bg-blue-500 p-[0.5rem]'>
        <AstralAddIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => modalController.addFileIdeaController.open()}
        />
      </div>
      <AstralEditSquareIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addStickyIdeaController.open()}
      />
      <AstralImageIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addSearchIdeaController.open()}
      />
      <AstralMicIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addFileAudioIdeaController.open()}
      />
      <AstralVideoCamIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addFileVideoIdeaController.open()}
      />

      <AstralLinkIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addWebsiteUrlIdeaController.open()}
      />
      <AstralArticleIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => modalController.addArticleIdeaController.open()}
      />
      {showMore && (
        <>
          <AstralSmartDisplayIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => modalController.addYouTubeUrlIdeaController.open()}
          />
          <AstralAlbumIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => modalController.addSpotifyUrlIdeaController.open()}
          />
          <AstralBookSparkIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => modalController.addGenerateIdeaController.open()}
          />
        </>
      )}
      <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
        {showMore ? (
          <AstralArrowLeft
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              setShowMore(false);
            }}
          />
        ) : (
          <AstralMoreIcon
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
