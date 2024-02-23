import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/(draft-epic)/sidebar/main';
import { useContext } from 'react';
import { CollectionContainer } from '../common/container/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionContext } from '@/(logic)/model/gallery/collection/main';

export function SidebarCollection() {
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const collection = useContext(CollectionContext);

  return (
    <div
      onClick={() => {
        sidebarHandler.goToCollection(collection);
      }}
    >
      <CollectionContainer>
        <CollectionThumbnail />
        <CollectionInfo />
      </CollectionContainer>
    </div>
  );
}
