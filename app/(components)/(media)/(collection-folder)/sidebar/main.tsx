import { MapSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/map/view/sidebar/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { ContextForGalleryCollectionObj } from '@/(model)/gallery/collection/main';
import { ContextForCollectionResourceList, useControllerForCollectionResourceList } from '@/(model)/(controller)/gallery/collection/resource/list';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(MapSidebarContext);
  const collection = useContext(ContextForGalleryCollectionObj);
  const resourceListController = useControllerForCollectionResourceList(collection.id);

  return (
    <ContextForCollectionResourceList.Provider value={resourceListController}>
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
    </ContextForCollectionResourceList.Provider>
  );
}
