import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../../main';

export function SpaceDraftGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);
  const sidebarController = useContext(SpaceDraftSidebarContext);

  return (
    <div className='flex h-full w-full flex-col overflow-auto px-[1rem]'>
      <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
        {galleryListController.state.objs.map((gallery) => (
          <>
            <p className='w-full text-lg font-bold text-slate-300'>
              {gallery.title}
            </p>
            <GlassWindowFrame
              className='h-[10rem] w-full flex-shrink-0'
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents
                onClick={() => sidebarController.actions.goToGallery(gallery)}
                className='flex w-full cursor-pointer flex-col space-y-[1rem]'
              >
                <img
                  src={gallery.thumbnail.src}
                  className='h-full w-full object-cover'
                />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </>
        ))}
      </div>
    </div>
  );
}
