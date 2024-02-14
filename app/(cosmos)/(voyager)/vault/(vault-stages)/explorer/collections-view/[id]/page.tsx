'use client';
import { createContext } from 'react';
import { ExploreCollectionsView } from './view';
import { GalleryObj } from '@/(ouros)/(model)/gallery/main';
import { CollectionObj } from '@/(ouros)/(model)/gallery/collection/main';
import insideCosmos from '@/utils/isAuth';
import {
  CollectionsModalContext,
  useCollectionsModal,
} from '../../../../../../(modals)/collections-modal/main';
import { useGallery } from '@/(cosmos)/(handler)/explorer/gallery/main';
import {
  CollectionHandler,
  useCollections,
} from '@/(cosmos)/(handler)/explorer/collections/main';

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
  const modalContext = useCollectionsModal();

  const context: ExploreGalleryContextObj = {
    gallery,
    collections,
    collectionHandler: _collectionHandler,
  };

  return (
    <ExploreGalleryContext.Provider value={context}>
      <CollectionsModalContext.Provider value={modalContext}>
        <ExploreCollectionsView />
      </CollectionsModalContext.Provider>
    </ExploreGalleryContext.Provider>
  );
}

export default insideCosmos(Page);
