'use client';
import { createContext } from 'react';
import { ExploreCollectionsView } from './view';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import {
  CollectionsModalContext,
  useCollectionsModal,
} from '../../../../../../../(modals)/collections-modal/main';
import { useGallery } from '@/(logic)/internal/handler/explorer/gallery/main';
import {
  CollectionHandler,
  useCollections,
} from '@/(logic)/internal/handler/explorer/collections/main';
import { CollectionsModalView } from '@/(modals)/collections-modal/view';

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
        <CollectionsModalView />
        <ExploreCollectionsView />
      </CollectionsModalContext.Provider>
    </ExploreGalleryContext.Provider>
  );
}

export default insideCosmos(Page);
