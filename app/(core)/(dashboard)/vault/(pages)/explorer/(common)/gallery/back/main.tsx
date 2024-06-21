import { ExplorerEditGalleryModal } from '@/(core)/(dashboard)/vault/(pages)/explorer/(modals)/edit/gallery/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForFlippable } from '@/(logic)/contexts/flippable/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import Link from 'next/link';
import { useContext } from 'react';
import { GalleryBackAuthor } from '../common/back/author/main';
import { GalleryBackDescription } from '../common/back/description/main';
import { GalleryBackEdit } from '../common/back/edit/main';
import { GalleryBackTitle } from '../common/back/title/main';

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
        <Link href={vaultMap.vault.explorer.gallery.id.link(gallery.id)}>
          <GalleryBackTitle />
        </Link>
        <GalleryBackAuthor />
        <GalleryBackDescription />
        <GalleryBackEdit />
      </div>
    </ContextForOpenable.Provider>
  );
}
