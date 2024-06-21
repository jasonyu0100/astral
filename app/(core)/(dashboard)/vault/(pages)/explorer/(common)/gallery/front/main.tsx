import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import Link from 'next/link';
import { useContext } from 'react';
import { ContainerDescription } from '../common/cover/description/main';
import { GalleryThumbnail } from '../common/cover/thumbnail/main';

export function GalleryExplorerFront() {
  const gallery = useContext(ContextForGalleryObj);

  return (
    <>
      <GalleryThumbnail />
      <Link href={vaultMap.vault.explorer.gallery.id.link(gallery.id)}>
        <ContainerDescription />
      </Link>
    </>
  );
}
