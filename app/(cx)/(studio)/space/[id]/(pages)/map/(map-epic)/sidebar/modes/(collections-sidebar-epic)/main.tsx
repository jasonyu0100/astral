import { useContext } from 'react';
import { CollectionContext } from '@/(types)/model/gallery/collection/main';
import { ArchiveSidebarCreateModalContext } from '@/(cx)/(center)/(modals)/archive/sidebar/create/main';
import { CollectionsHandlerContext } from '@/(lgx)/internal/handler/explorer/collections/main';
import { SidebarCollection } from '@/(lib)/(explorer)/(collection-assets-epic)/sidebar/main';
import { SidebarCollectionAdd } from '@/(lib)/(explorer)/(collection-assets-epic)/sidebar/add/main';

export function CollectionsInterface() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const collections = collectionsHandler.collections;
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem] overflow-auto'>
        <SidebarCollectionAdd
          onClick={() => {
            modalContext.createCollection.open();
          }}
        />
        {collections.map((collection) => (
          <CollectionContext.Provider value={collection} key={collection.id}>
            <SidebarCollection key={collection.id} />
          </CollectionContext.Provider>
        ))}
      </div>
      <p className='font-bold text-slate-500'>Back</p>
    </div>
  );
}
