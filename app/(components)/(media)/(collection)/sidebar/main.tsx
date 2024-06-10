import { MapSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/map/view/sidebar/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryCollectionMain } from '@/(server)/(controller)/gallery/collection/main';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(MapSidebarContext);
  const collection = useContext(ContextForGalleryCollectionObj);

  return (
    <div
      className='w-full cursor-pointer'
      onClick={() => {
        sidebarHandler.goToCollection(collection);
      }}
    >
      <CollectionContainer className='w-full'>
        <CollectionThumbnail />
        <CollectionInfo />
      </CollectionContainer>
    </div>
  );
}
