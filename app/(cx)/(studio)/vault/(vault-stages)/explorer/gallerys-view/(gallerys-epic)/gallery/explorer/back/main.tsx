import { GalleryContext } from '@/(logic)/model/gallery/main';
import { vaultMap } from '@/(cx)/(studio)/vault/map';
import Link from 'next/link';
import { useContext } from 'react';
import { GalleryBackChange } from '../../common/back/change/main';
import { GalleryBackDescription } from '../../common/back/description/main';
import { GalleryBackAuthor } from '../../common/back/author/main';
import { GalleryBackTitle } from '../../common/back/title/main';
import { FlipContext } from '@/(logic)/contexts/flip/main';

export function GalleryExplorerBack() {
  const { flip } = useContext(FlipContext);
  const gallery = useContext(GalleryContext);

  return (
    <div
      className='flex w-full flex-grow flex-col p-[1rem]'
      onClick={() => flip()}
    >
      <Link href={vaultMap.vault.explorer.collections.id.link(gallery.id)}>
        <GalleryBackTitle/>
      </Link>
      <GalleryBackAuthor />
      <GalleryBackDescription />
      <GalleryBackChange />
    </div>
  );
}
