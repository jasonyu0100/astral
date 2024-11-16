import { ContextForSpacesIdeasModals } from '@/(core)/(project)/spaces/[id]/(pages)/ideas/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralArrowLeft } from '@/icons/arrow-left/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralMicIcon } from '@/icons/mic/main';
import { AstralMoreIcon } from '@/icons/more/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { AstralUploadIcon } from '@/icons/upload/main';
import { useContext, useState } from 'react';

export function SpacesIdeasPaletteDefault() {
  const spacesSpaceModalsController = useContext(ContextForSpacesIdeasModals);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center rounded-full bg-blue-500 p-[0.5rem]'>
        <AstralAddIcon
          className='h-[2rem] w-[2rem]'
          onClick={() =>
            spacesSpaceModalsController.addStickyIdeaController.open()
          }
        />
      </div>
      <AstralUploadIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => spacesSpaceModalsController.addFileIdeaController.open()}
      />
      <AstralChatIndicatorIcon
        className='h-[2rem] w-[2rem]'
        onClick={() =>
          spacesSpaceModalsController.addArticleIdeaController.open()
        }
      />
      <AstralSearchIcon
        className='h-[2rem] w-[2rem]'
        onClick={() =>
          spacesSpaceModalsController.addSearchIdeaController.open()
        }
      />
      <AstralMicIcon
        className='h-[2rem] w-[2rem]'
        onClick={() =>
          spacesSpaceModalsController.addFileAudioIdeaController.open()
        }
      />
      {/* <AstralVideoCamIcon
        className='h-[2rem] w-[2rem]'
        onClick={() =>
          spacesSpaceModalsController.addFileVideoIdeaController.open()
        }
      /> */}
      <AstralLinkIcon
        className='h-[2rem] w-[2rem]'
        onClick={() =>
          spacesSpaceModalsController.addWebsiteUrlIdeaController.open()
        }
      />
      {showMore && (
        <>
          <AstralSmartDisplayIcon
            className='h-[2rem] w-[2rem]'
            onClick={() =>
              spacesSpaceModalsController.addYouTubeUrlIdeaController.open()
            }
          />
          <AstralAlbumIcon
            className='h-[2rem] w-[2rem]'
            onClick={() =>
              spacesSpaceModalsController.addSpotifyUrlIdeaController.open()
            }
          />
          <AstralBookSparkIcon
            className='h-[2rem] w-[2rem]'
            onClick={() =>
              spacesSpaceModalsController.addGenerateIdeaController.open()
            }
          />
        </>
      )}
      <div className='flex items-center justify-center rounded-full bg-slate-400 p-[0.5rem]'>
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
