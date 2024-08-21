import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceMapSidebarContext } from '../../../../main';

export function SpaceMapGalleryThumbnail() {
  const gallery = useContext(ContextForGalleryObj);
  const sidebarController = useContext(SpaceMapSidebarContext);

  return (
    <div className='flex flex-col'>
      <GlassWindowFrame
        className='aspect-square w-full flex-shrink-0'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents
          onClick={() => sidebarController.actions.goToGallery(gallery)}
          className='relative h-full w-full cursor-pointer'
        >
          <img
            src={gallery.thumbnail.src}
            className='absolute h-full w-full object-cover'
          />
          <div className='absolute flex h-full w-full items-center justify-center bg-slate-800 bg-opacity-30'>
            <p className='w-full text-center text-sm font-bold text-white'>
              {gallery.title}
            </p>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
