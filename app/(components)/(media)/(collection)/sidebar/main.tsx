import { SpaceDraftSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/draft/view/sidebar/main';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';

export function SidebarCollection() {
  const { actions: sidebarHandler } = useContext(SpaceDraftSidebarContext);
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
