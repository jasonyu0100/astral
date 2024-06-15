import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { CollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { glassFx, roundedFx } from '@/(style)/data';
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
      <p
        className='mb-[1rem] cursor-pointer font-bold text-white'
        onClick={() => {
          collectionsListController.state.currentObj &&
            sidebarController.actions.goToCollection(
              collectionsListController.state.currentObj,
            );
        }}
      >
        HOME / {galleryListController.state.currentObj?.title} /{' '}
        {collectionsListController.state.currentObj?.title}
      </p>
      <HorizontalDivider />
      <br />
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
          {resourceListController.state.objs.map((resource) => (
            <div style={{ width: 'calc(50% - 0.5rem)' }}>
              <GlassWindowFrame
                className='aspect-square w-full flex-shrink-0'
                roundedFx={roundedFx.rounded}
              >
                <GlassWindowContents className='flex w-full cursor-pointer flex-row space-x-[1rem] p-[1rem]'>
                  <p className='w-full font-extraBold text-lg text-slate-300'>
                    /{resource.title}
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
