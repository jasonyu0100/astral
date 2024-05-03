import { GalleryContext } from '@/(lgx)/internal/model/gallery/main';
import { archiveMap } from '@/(cx)/(center)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';

export function GalleryExplorerFront() {
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
