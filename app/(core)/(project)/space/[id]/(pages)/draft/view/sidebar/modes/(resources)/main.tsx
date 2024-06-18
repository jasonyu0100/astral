import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { CollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { createContext, useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../main';

export const SidebarResourceContext = createContext(
  {} as CollectionResourceObj,
);

export function SpaceDraftCollectionResourcesMode() {
  const galleryListController = useContext(ContextForGalleryList);
  const collectionsListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);
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
          <p
            className='cursor-pointer text-sm font-bold text-slate-500'
            onClick={() => {
              galleryListController.state.currentObj &&
                sidebarController.actions.goToGallery(
                  galleryListController.state.currentObj,
                );
            }}
          >
            Gallerys / {galleryListController.state.currentObj?.title} /{' '}
            {collectionsListController.state.currentObj?.title}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div
        className='flex w-full flex-col overflow-auto px-[1rem]'
        style={{ height: 'calc(100% - 4rem - 80px)' }}
      >
        <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
          {resourceListController.state.objs.map((resource) => (
            <>
              <p className='w-full text-lg font-bold text-slate-300'>
                {resource.title}
              </p>
              <GlassWindowFrame
                className='h-[10rem] w-full flex-shrink-0'
                borderFx={borderFx['border-around']}
              >
                <GlassWindowContents className='flex w-full cursor-pointer flex-row space-x-[1rem] p-[1rem]'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
