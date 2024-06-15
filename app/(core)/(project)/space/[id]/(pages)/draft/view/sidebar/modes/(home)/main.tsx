import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../main';

export function SpaceDraftSidebarHomeGallerysMode() {
  const galleryListController = useContext(ContextForGalleryList);
  const sidebarController = useContext(SpaceDraftSidebarContext);

  return (
    <div className='flex h-full w-full flex-col'>
      <p className='mb-[1rem] cursor-pointer font-bold text-white'>HOME</p>
      <HorizontalDivider />
      <br />
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
          {galleryListController.state.objs.map((gallery) => (
            <div style={{ width: 'calc(50% - 0.5rem)' }}>
              <GlassWindowFrame
                className='aspect-square w-full flex-shrink-0'
                roundedFx={roundedFx.rounded}
              >
                <GlassWindowContents
                  onClick={() => sidebarController.actions.goToGallery(gallery)}
                  className='flex w-full cursor-pointer flex-row space-x-[1rem] p-[1rem]'
                >
                  <p className='w-full font-extraBold text-lg text-slate-300'>
                    /{gallery.title}
                  </p>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
