import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/(draft-epic)/sidebar/main';
import { useContext } from 'react';
import { CollectionSample } from '../common/sample/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionContext, ResourcesContext } from '@/(logic)/model/gallery/collection/main';
import { useCollectionResources } from '@/(logic)/handler/explorer/resources/main';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const collection = useContext(CollectionContext);
  const { resources } = useCollectionResources(collection.id);

  return (
    <ResourcesContext.Provider value={resources}>
      <div
        className='w-full cursor-pointer'
        onClick={() => {
          sidebarHandler.goToCollection(collection);
        }}
      >
        <CollectionSample>
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionSample>
      </div>
    </ResourcesContext.Provider>
  );
}
