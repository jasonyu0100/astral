import { useContext } from 'react';
import { CollectionContext } from '@/(lgx)/internal/model/gallery/collection/main';
import { ArchiveSidebarCreateModalContext } from '@/(cx)/(center)/(modals)/archive/sidebar/create/main';
import { CollectionsHandlerContext } from '@/(lgx)/internal/handler/explorer/collections/main';
import { SidebarCollection } from '@/(pkgs)/(explorer)/(collection-assets-epic)/sidebar/main';
import { SidebarCollectionAdd } from '@/(pkgs)/(explorer)/(collection-assets-epic)/sidebar/add/main';

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
