import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../main';

export function SpaceDraftSidebarHomeGallerysMode() {
  const galleryListController = useContext(ContextForGalleryList);
  const sidebarController = useContext(SpaceDraftSidebarContext);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex h-[4rem] items-center justify-center p-[1rem] shadow-glow'>
        <GlassWindowFrame
          className='h-[2rem] w-full flex-shrink-0'
          roundedFx={roundedFx['rounded']}
        >
          <GlassWindowContents className='h-full w-full'>
            <input
              className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
              placeholder='Venture forth...'
            ></input>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
      <GlassWindowFrame className='h-[3rem] w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full items-center px-[1rem]'>
          <p className='cursor-pointer text-sm font-bold text-slate-500'>
            Gallerys
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
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
    </div>
  );
}
