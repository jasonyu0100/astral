import { SpaceBoardSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/board/view/sidebar/main';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(SpaceBoardSidebarContext);
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
