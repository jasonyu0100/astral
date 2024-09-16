import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import {
  ContextForFlippable,
  useControllerForFlippable,
} from '@/logic/contexts/flippable/main';
import Link from 'next/link';
import { useContext } from 'react';
import { GalleryFinderBack } from './back/main';
import { GalleryContainer } from './common/container/main';
import { GalleryFinderFront } from './front/main';

export function FinderGallery() {
  const flippableController = useControllerForFlippable();
  const gallery = useContext(ContextForGalleryObj);

  return (
    <Link href={vaultMap.vault.finder.gallery.id.link(gallery.id)}>
      <ContextForFlippable.Provider value={flippableController}>
        <GalleryContainer className='w-full'>
          {flippableController.flipped ? (
            <GalleryFinderBack />
          ) : (
            <GalleryFinderFront />
          )}
        </GalleryContainer>
      </ContextForFlippable.Provider>
    </Link>
  );
}
