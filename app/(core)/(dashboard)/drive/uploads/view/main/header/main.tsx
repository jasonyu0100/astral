import { driveMap } from '@/(core)/(dashboard)/drive/map';
import { ContextForGalleryMain } from '@/architecture/controller/gallery/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import { DriveUploadsDailyHeaderLeft } from './left/main';

export function DriveUploadsDailyHeader() {
  const galleryController = useContext(ContextForGalleryMain);
  return (
    <GlassWindowFrame className='h-[4rem] w-full flex-shrink-0'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='grid w-full grid-cols-3 items-center p-[1rem]'>
        <div>
          <DriveUploadsDailyHeaderLeft />
        </div>
        <div></div>
        <div className='flex flex-row justify-end'>
          <AstralFolderIcon
            onClick={() => {
              window.location.href = driveMap.drive.finder.gallery.id.link(
                galleryController.state.objId,
              );
            }}
          />
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
