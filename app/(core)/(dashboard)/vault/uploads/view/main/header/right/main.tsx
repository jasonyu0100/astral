import { ContextForDashboardUploadsModals } from '@/(core)/(dashboard)/journal/modal/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralAlbumIcon } from '@/icons/album/main';
import { AstralEditSquareIcon } from '@/icons/edit-square/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralSmartDisplayIcon } from '@/icons/smart-display/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function UploadsDailyFooterRight() {
  const modalController = useContext(ContextForDashboardUploadsModals);

  return (
    <>
      <div className='flex h-full w-full items-center justify-end space-x-[1rem]'>
        <AstralAlbumIcon
          onClick={() => {
            modalController.addUrlSpotifyModal.open();
          }}
        />
        <AstralSmartDisplayIcon
          onClick={() => {
            modalController.addUrlYouTubeModal.open();
          }}
        />
        <AstralLinkIcon
          onClick={() => modalController.addUrlWebsiteModal.open()}
        />
        <AstralEditSquareIcon
          onClick={() => {
            modalController.addTextStickyModal.open();
          }}
        />
        <GlassWindowFrame
          className='aspect-square h-[2.5rem] w-[2.5rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => {
              modalController.addFileModal.open();
            }}
          >
            <AstralAddIcon />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}
