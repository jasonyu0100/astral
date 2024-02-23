import { GalleryContext } from '@/(logic)/model/gallery/main';
import { archiveMap } from '@/(cx)/(studio)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';

export function GalleryExplorerCover() {
  const gallery = useContext(GalleryContext);

  return (
    <>
      <GalleryThumbnail />
      <Link href={archiveMap.archive.explorer.collections.id.link(gallery.id)}>
        <ContainerDescription />
      </Link>
    </>
  );
}
