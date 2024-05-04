import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionSample } from '../common/sample/main';
import { archiveMap } from '@/(cx)/(center)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  CollectionContext,
  ResourcesContext,
} from '@/(types)/model/gallery/collection/main';
import { useResourcesHandler } from '@/(lgx)/internal/handler/explorer/resources/main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';

export function ExplorerCollection() {
  const collection = useContext(CollectionContext);
  const user = useGlobalUser((state) => state.user);
  const { resources } = useResourcesHandler(collection.id, user?.id);

  return (
    <ResourcesContext.Provider value={resources}>
      <Link href={archiveMap.archive.explorer.resources.id.link(collection.id)}>
        <CollectionSample>
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionSample>
      </Link>
    </ResourcesContext.Provider>
  );
}
