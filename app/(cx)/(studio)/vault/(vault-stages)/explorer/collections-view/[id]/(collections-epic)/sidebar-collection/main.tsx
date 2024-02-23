import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/(draft-epic)/sidebar/main';
import { useContext } from 'react';
import { CollectionContainer } from '../collection/container/main';
import { CollectionInfo } from '../collection/info/main';
import { CollectionThumbnail } from '../collection/thumbnail/main';
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
