import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionContainer } from '../common/container/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  GalleryCollectionContext,
  CollectionResourcesContext,
} from '@/(model)/gallery/collection/main';
import { useResourcesHandler } from '@/(model)/(controller)/(archive)/explorer/resources/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function ExplorerCollection() {
  const collection = useContext(GalleryCollectionContext);
  const user = useGlobalUser((state) => state.user);
  const { resources } = useResourcesHandler(collection.id, user?.id);

  return (
    <CollectionResourcesContext.Provider value={resources}>
      <Link href={archiveMap.archive.explorer.resources.id.link(collection.id)}>
        <CollectionContainer className="w-[300px]">
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </Link>
    </CollectionResourcesContext.Provider>
  );
}
