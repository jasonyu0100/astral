import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';
import { archiveMap } from '@/(cx)/(studio)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import { GalleryBackEdit } from '../../common/back/edit/main';
import { GalleryBackDescription } from '../../common/back/description/main';
import { GalleryBackAuthor } from '../../common/back/author/main';
import { GalleryBackTitle } from '../../common/back/title/main';
import { FlipContext } from '@/(logic)/internal/contexts/flip/main';

export function GalleryExplorerBack() {
  const { flip } = useContext(FlipContext);
  const gallery = useContext(GalleryContext);

  return (
    <div
      className='flex w-full flex-col p-[1rem] h-full'
      onClick={() => flip()}
    >
      <Link href={archiveMap.archive.explorer.collections.id.link(gallery.id)}>
        <GalleryBackTitle/>
      </Link>
      <GalleryBackAuthor />
      <GalleryBackDescription />
      <GalleryBackEdit />
    </div>
  );
}
