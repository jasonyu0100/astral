import { MapSidebarContext } from '@/(core)/(studio)/space/[id]/(pages)/map/(map-epic)/sidebar/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionContext, ResourcesContext } from '@/(types)/model/gallery/collection/main';
import { useResourcesHandler } from '@/(types)/handler/explorer/resources/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

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
        <CollectionContainer className="w-full">
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </div>
    </ResourcesContext.Provider>
  );
}
