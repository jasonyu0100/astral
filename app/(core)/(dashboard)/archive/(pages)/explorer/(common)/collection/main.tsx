import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import Link from 'next/link';
import { useContext } from 'react';
import { CollectionContainer } from './common/container/main';
import { CollectionInfo } from './common/info/main';
import { CollectionThumbnail } from './common/thumbnail/main';

export function ExplorerCollection() {
  const collection = useContext(ContextForGalleryCollectionObj);

  return (
    <Link href={archiveMap.archive.explorer.collection.id.link(collection.id)}>
      <CollectionContainer className='w-[300px]'>
        <CollectionThumbnail />
        <CollectionInfo />
      </CollectionContainer>
    </Link>
  );
}
