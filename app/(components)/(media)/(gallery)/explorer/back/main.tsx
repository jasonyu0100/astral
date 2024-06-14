import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import { GalleryBackEdit } from '../../common/back/edit/main';
import { GalleryBackDescription } from '../../common/back/description/main';
import { GalleryBackAuthor } from '../../common/back/author/main';
import { GalleryBackTitle } from '../../common/back/title/main';
import { ContextForFlippable } from '@/(logic)/contexts/flippable/main';
import { ExplorerEditGalleryModal } from '@/(core)/(dashboard)/archive/(pages)/explorer/(modals)/edit/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';

export function GalleryExplorerBack() {
  const flippableController = useContext(ContextForFlippable);
  const openableController = useControllerForOpenable();
  const gallery = useContext(ContextForGalleryObj);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ExplorerEditGalleryModal />
      <div
        className='flex h-full w-full flex-col p-[1rem]'
        onClick={() => flippableController.flip()}
      >
        <Link href={archiveMap.archive.explorer.gallery.id.link(gallery.id)}>
          <GalleryBackTitle />
        </Link>
        <GalleryBackAuthor />
        <GalleryBackDescription />
        <GalleryBackEdit />
      </div>
    </ContextForOpenable.Provider>
  );
}
