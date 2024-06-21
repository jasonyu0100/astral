import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import Link from 'next/link';
import { useContext } from 'react';
import { CollectionContainer } from './common/container/main';
import { CollectionInfo } from './common/info/main';
import { CollectionThumbnail } from './common/thumbnail/main';

export function ExplorerCollection() {
  const collection = useContext(ContextForGalleryCollectionObj);

  return (
    <Link href={vaultMap.vault.explorer.collection.id.link(collection.id)}>
      <CollectionContainer className='w-[300px]'>
        <CollectionThumbnail />
        <CollectionInfo />
      </CollectionContainer>
    </Link>
  );
}
