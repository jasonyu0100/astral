import { MapSidebarContext } from '@/(cx)/(studio)/space/[id]/(process-stages)/map/(map-epic)/sidebar/main';
import { useContext } from 'react';
import { CollectionSample } from '../common/sample/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionContext, ResourcesContext } from '@/(lgx)/internal/model/gallery/collection/main';
import { useResourcesHandler } from '@/(lgx)/internal/handler/explorer/resources/main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(MapSidebarContext);
  const collection = useContext(CollectionContext);
  const user = useGlobalUser((state) => state.user);
  const { resources } = useResourcesHandler(collection.id, user?.id);

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
