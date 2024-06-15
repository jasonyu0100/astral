import { SidebarCollectionAdd } from '@/(components)/(media)/(collection)/sidebar/add/main';
import { SidebarCollection } from '@/(components)/(media)/(collection)/sidebar/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/draft/(modal)/sidebar/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../main';

export function SpaceDraftGalleryCollectionsMode() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const modalContext = useContext(ContextForSidebarModals);
  const { actions: sidebarHandler } = useContext(SpaceDraftSidebarContext);

  return (
    <div className='flex h-full w-full flex-col pr-[1rem] '>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem]'>
        {collectionListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider
            value={collection}
            key={collection.id}
          >
            <SidebarCollection key={collection.id} />
          </ContextForGalleryCollectionObj.Provider>
        ))}
        <SidebarCollectionAdd
          onClick={() => {
            modalContext.createCollection.open();
          }}
        />
      </div>
    </div>
  );
}
