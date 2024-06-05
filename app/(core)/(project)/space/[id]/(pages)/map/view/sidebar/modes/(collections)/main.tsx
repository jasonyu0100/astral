import { useContext } from 'react';
import { GalleryCollectionContext } from '@/(model)/archive/collection/main';
import { ArchiveSidebarCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/main';
import { CollectionsHandlerContext } from '@/(controller)/explorer/collections/main';
import { SidebarCollection } from '@/(components)/(media)/(collection-folder)/sidebar/main';
import { SidebarCollectionAdd } from '@/(components)/(media)/(collection-folder)/sidebar/add/main';

export function CollectionsInterface() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const collections = collectionsHandler.collections;
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem] overflow-auto pr-[1rem]'>
        <SidebarCollectionAdd
          onClick={() => {
            modalContext.createCollection.open();
          }}
        />
        {collections.map((collection) => (
          <GalleryCollectionContext.Provider value={collection} key={collection.id}>
            <SidebarCollection key={collection.id} />
          </GalleryCollectionContext.Provider>
        ))}
      </div>
      <p className='font-bold text-slate-500'>Back</p>
    </div>
  );
}
