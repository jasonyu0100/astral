import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import {
  ContextForFlippable,
  useControllerForFlippable,
} from '@/logic/contexts/flippable/main';
import Link from 'next/link';
import { useContext } from 'react';
import { GalleryExplorerBack } from './back/main';
import { GalleryContainer } from './common/container/main';
import { GalleryExplorerFront } from './front/main';

export function ExplorerGallery() {
  const flippableController = useControllerForFlippable();
  const gallery = useContext(ContextForGalleryObj);

  return (
    <Link href={vaultMap.vault.explorer.gallery.id.link(gallery.id)}>
      <ContextForFlippable.Provider value={flippableController}>
        <GalleryContainer className='w-[200px]'>
          {flippableController.flipped ? (
            <GalleryExplorerBack />
          ) : (
            <GalleryExplorerFront />
          )}
        </GalleryContainer>
      </ContextForFlippable.Provider>
    </Link>
  );
}
