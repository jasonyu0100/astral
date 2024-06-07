import { MapSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/map/view/sidebar/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { ContextForGalleryCollectionObj } from '@/(model)/gallery/collection/main';
import { ResourcesHandlerContext, useResourcesHandler } from '@/(model)/(controller)/(archive)/explorer/resources/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(MapSidebarContext);
  const collection = useContext(ContextForGalleryCollectionObj);
  const user = useGlobalUser((state) => state.user);
  const resourcesHandler = useResourcesHandler(collection.id, user?.id);

  return (
    <ResourcesHandlerContext.Provider value={resourcesHandler}>
      <div
        className='w-full cursor-pointer'
        onClick={() => {
          sidebarHandler.goToCollection(collection);
        }}
      >
        <CollectionContainer className="w-full">
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </div>
    </ResourcesHandlerContext.Provider>
  );
}
