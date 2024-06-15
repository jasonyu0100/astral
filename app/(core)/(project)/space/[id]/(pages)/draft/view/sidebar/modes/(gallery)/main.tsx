import { SidebarCollectionAdd } from '@/(components)/(media)/(collection)/sidebar/add/main';
import { SidebarCollection } from '@/(components)/(media)/(collection)/sidebar/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/draft/(modal)/sidebar/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { useContext } from 'react';

export function SpaceDraftGalleryCollectionsMode() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <div className='flex h-full w-full flex-col pr-[1rem]'>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem] overflow-auto'>
        <SidebarCollectionAdd
          onClick={() => {
            modalContext.createCollection.open();
          }}
        />
        {collectionListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider
            value={collection}
            key={collection.id}
          >
            <SidebarCollection key={collection.id} />
          </ContextForGalleryCollectionObj.Provider>
        ))}
      </div>
      <p className='font-bold text-slate-500'>Back</p>
    </div>
  );
}
