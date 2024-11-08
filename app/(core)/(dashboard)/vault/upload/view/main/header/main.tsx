import { ContextForGalleryMain } from '@/architecture/controller/gallery/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import { JournalDailyFooterRight } from './right/main';

export function JournalDailyHeader() {
  const galleryController = useContext(ContextForGalleryMain);
  return (
    <GlassWindowFrame className='h-[4rem] w-full flex-shrink-0'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='grid w-full grid-cols-3 items-center p-[1rem]'>
        <div>
          {/* <AstralFolderIcon
            onClick={() => {
              window.location.href = vaultMap.vault.finder.gallery.id.link(
                galleryController.state.objId,
              );
            }}
          /> */}
        </div>
        <div></div>
        <JournalDailyFooterRight />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
