import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryCollectionObj } from '@/server/model/gallery/collection/main';
import Link from 'next/link';
import { useContext } from 'react';
import { CollectionContainer } from './common/container/main';
import { CollectionDescription } from './common/description/main';

export function FinderCollection() {
  const collection = useContext(ContextForGalleryCollectionObj);

  return (
    <CollectionContainer>
      <Link href={vaultMap.vault.finder.collection.id.link(collection.id)}>
        <CollectionDescription />
      </Link>
    </CollectionContainer>
  );
}
