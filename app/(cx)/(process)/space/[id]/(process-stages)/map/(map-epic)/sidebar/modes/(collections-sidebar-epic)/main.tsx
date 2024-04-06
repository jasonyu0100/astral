import { useContext } from 'react';
import { CollectionContext } from '@/(logic)/internal/model/gallery/collection/main';
import { ArchiveSidebarCreateModalContext } from '@/(modals)/(studio)/archive/sidebar/create/main';
import { CollectionsHandlerContext } from '@/(logic)/internal/handler/explorer/collections/main';
import { SidebarCollection } from '@/(components)/(explorer)/(collection-assets-epic)/sidebar/main';
import { SidebarCollectionAdd } from '@/(components)/(explorer)/(collection-assets-epic)/sidebar/add/main';

export function CollectionsInterface() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const collections = collectionsHandler.collections;
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex flex-col space-y-[2rem]'>
      {collections.map((collection) => (
        <CollectionContext.Provider value={collection} key={collection.id}>
          <SidebarCollection key={collection.id}/>
        </CollectionContext.Provider>
      ))}
      <SidebarCollectionAdd
        onClick={() => {
          modalContext.createCollection.open();
        }}
      />
    </div>
  );
}
