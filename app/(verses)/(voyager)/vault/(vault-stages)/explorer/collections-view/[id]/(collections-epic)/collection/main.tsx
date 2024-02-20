import { CollectionThumbnail } from './thumbnail/main';
import { CollectionInfo } from './info/main';
import { GalleryCollectionContainer } from './container/main';
import { vaultMap } from '@/(verses)/(voyager)/vault/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  CollectionContext,
  CollectionResourcesContext,
} from '@/(ouros)/(model)/gallery/collection/main';
import { useCollectionResources } from '@/(verses)/(handler)/explorer/resources/main';

export function GalleryCollection() {
  const collection = useContext(CollectionContext);
  const { resources } = useCollectionResources(collection.id);

  return (
    <CollectionResourcesContext.Provider value={resources}>
      <Link href={vaultMap.vault.explorer.resources.id.link(collection.id)}>
        <GalleryCollectionContainer>
          <CollectionThumbnail />
          <CollectionInfo />
        </GalleryCollectionContainer>
      </Link>
    </CollectionResourcesContext.Provider>
  );
}
