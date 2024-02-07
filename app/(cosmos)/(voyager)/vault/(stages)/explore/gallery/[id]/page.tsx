'use client';
import { createContext } from 'react';
import { ExploreGalleryView } from './view';
import { GalleryObj } from '@/tables/gallery/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import insideCosmos from '@/utils/isAuth';
import {
  GalleryModalContext,
  useGalleryModal,
} from './gallery-epic/modal/main';
import { useGallery } from '@/handler/gallery/main';
import {
  CollectionHandler,
  useCollections,
} from '@/handler/collections/main';

interface ExploreGalleryContextObj {
  gallery: GalleryObj;
  collections: CollectionObj[];
  collectionHandler: CollectionHandler;
}

export const ExploreGalleryContext = createContext<ExploreGalleryContextObj>(
  {} as ExploreGalleryContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const { gallery } = useGallery(params.id);
  const { collections, _collectionHandler } = useCollections(gallery.id);
  const modalContext = useGalleryModal();

  const context: ExploreGalleryContextObj = {
    gallery,
    collections,
    collectionHandler: _collectionHandler,
  };

  return (
    <ExploreGalleryContext.Provider value={context}>
      <GalleryModalContext.Provider value={modalContext}>
        <ExploreGalleryView />
      </GalleryModalContext.Provider>
    </ExploreGalleryContext.Provider>
  );
}

export default insideCosmos(Page);
