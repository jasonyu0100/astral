import { useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { SidebarCollectionAdd } from '../../../../../../../../../(studio)/archive/(collections-epic)/collection/sidebar/add/main';
import { SidebarCollection } from '../../../../../../../../../(studio)/archive/(collections-epic)/collection/sidebar/main';
import { CollectionContext } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import { ArchiveSidebarCreateModalContext } from '@/(modals)/(studio)/archive/sidebar/create/main';

export function CollectionsInterface() {
  const { collections } = useContext(DraftSidebarContext);
  const modalContext = useContext(ArchiveSidebarCreateModalContext);

  return (
    <div className='flex flex-col space-y-[2rem]'>
      {collections.map((collection) => (
        // eslint-disable-next-line react/jsx-key
        <CollectionContext.Provider value={collection}>
          <SidebarCollection />
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
