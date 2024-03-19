import { useContext } from 'react';
import { SidebarCollectionAdd } from '../../../../../../../../../(studio)/archive/(collections-epic)/collection/sidebar/add/main';
import { SidebarCollection } from '../../../../../../../../../(studio)/archive/(collections-epic)/collection/sidebar/main';
import { CollectionContext } from '@/(logic)/internal/model/gallery/collection/main';
import { ArchiveSidebarCreateModalContext } from '@/(modals)/(studio)/archive/sidebar/create/main';
import { CollectionsHandlerContext } from '@/(logic)/internal/handler/explorer/collections/main';

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
