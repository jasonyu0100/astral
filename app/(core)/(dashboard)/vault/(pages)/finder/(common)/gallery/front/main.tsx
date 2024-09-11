import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import Link from 'next/link';
import { useContext } from 'react';
import { ContainerDescription } from '../common/cover/description/main';

export function GalleryExplorerFront() {
  const gallery = useContext(ContextForGalleryObj);

  return (
    <>
      <Link href={vaultMap.vault.finder.gallery.id.link(gallery.id)}>
        <ContainerDescription />
      </Link>
    </>
  );
}
