import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionSample } from '../common/sample/main';
import { archiveMap } from '@/(cx)/(studio)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  CollectionContext,
  ResourcesContext,
} from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import { useCollectionResources } from '@/(logic)/internal/handler/explorer/resources/main';

export function GalleryCollection() {
  const collection = useContext(CollectionContext);
  const { resources } = useCollectionResources(collection.id);

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
