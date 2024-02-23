import { GalleryContext } from '@/(logic)/model/gallery/main';
import { vaultMap } from '@/(cx)/(studio)/vault/map';
import Link from 'next/link';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';

export function GalleryExplorerCover() {
  const gallery = useContext(GalleryContext);

  return (
    <div>
      <GalleryThumbnail />
      <Link href={vaultMap.vault.explorer.collections.id.link(gallery.id)}>
        <ContainerDescription />
      </Link>
    </div>
  );
}
