import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionContainer } from '../common/container/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { ContextForGalleryCollectionMain } from '@/(server)/(controller)/gallery/collection/main';

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
