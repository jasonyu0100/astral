import { CollectionThumbnail } from './thumbnail/main';
import { CollectionInfo } from './info/main';
import { GalleryCollectionContainer } from './container/main';
import { vaultMap } from '@/(cosmos)/(voyager)/vault/map';
import Link from 'next/link';
import { useContext } from 'react';
import { CollectionContext } from '@/(ouros)/(model)/gallery/collection/main';

export function GalleryCollection() {
  const collection = useContext(CollectionContext);
  return (
      <Link href={vaultMap.vault.explorer.resources.id.link(collection.id)}>
        <GalleryCollectionContainer>
          <CollectionThumbnail />
          <CollectionInfo />
        </GalleryCollectionContainer>
      </Link>
  );
}
