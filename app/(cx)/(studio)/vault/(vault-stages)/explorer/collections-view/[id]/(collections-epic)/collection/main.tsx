import { CollectionThumbnail } from './thumbnail/main';
import { CollectionInfo } from './info/main';
import { CollectionContainer } from './container/main';
import { vaultMap } from '@/(cx)/(studio)/vault/map';
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
      <Link href={vaultMap.vault.explorer.resources.id.link(collection.id)}>
        <CollectionContainer>
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </Link>
    </ResourcesContext.Provider>
  );
}
