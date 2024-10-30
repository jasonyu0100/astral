import { ContextForGalleryObj } from '@/server/model/gallery/main';
import Link from 'next/link';
import { useContext } from 'react';
import { vaultMap } from '../../../map';
import { GalleryContainer } from './common/container/main';
import { ContainerDescription } from './common/cover/description/main';

export function FinderGallery() {
  const gallery = useContext(ContextForGalleryObj);

  return (
    <GalleryContainer className='w-full'>
      <Link href={vaultMap.vault.finder.gallery.id.link(gallery.id)}>
        <ContainerDescription />
      </Link>
    </GalleryContainer>
  );
}
