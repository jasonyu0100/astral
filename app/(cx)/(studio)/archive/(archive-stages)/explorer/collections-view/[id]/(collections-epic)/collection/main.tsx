import { CollectionThumbnail } from './common/thumbnail/main';
import { CollectionInfo } from './common/info/main';
import { CollectionContainer } from './common/container/main';
import { archiveMap } from '@/(cx)/(studio)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  CollectionContext,
  ResourcesContext,
} from '@/(logic)/model/gallery/collection/main';
import { useCollectionResources } from '@/(logic)/handler/explorer/resources/main';

export function GalleryCollection() {
  const collection = useContext(CollectionContext);
  const { resources } = useCollectionResources(collection.id);

  return (
    <ResourcesContext.Provider value={resources}>
      <Link href={archiveMap.archive.explorer.resources.id.link(collection.id)}>
        <CollectionContainer>
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </Link>
    </ResourcesContext.Provider>
  );
}
