import { brandMap } from '@/(core)/(dashboard)/brand/map';
import { ContextForGalleryMain } from '@/architecture/controller/gallery/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { glassFx } from '@/style/data';
import Link from 'next/link';
import { useContext } from 'react';
import { BrandUploadsDailyHeaderLeft } from './left/main';

export function BrandUploadsDailyHeader() {
  const galleryController = useContext(ContextForGalleryMain);
  return (
    <GlassWindowFrame className='h-[4rem] w-full flex-shrink-0'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='grid w-full grid-cols-3 items-center p-[1rem]'>
        <div>
          <BrandUploadsDailyHeaderLeft />
        </div>
        <div></div>
        <div className='flex flex-row justify-end'>
          <Link
            href={brandMap.drive.manage.gallery.id.link(
              galleryController.state.objId,
            )}
          >
            <AstralFolderIcon />
          </Link>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
