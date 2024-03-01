'use client';
import { createContext } from 'react';
import { CollectionsView } from './view';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGallery } from '@/(logic)/internal/handler/explorer/gallery/main';
import {
  CollectionHandler,
  useCollections,
} from '@/(logic)/internal/handler/explorer/collections/main';

interface ExplorerGalleryContextObj {
  gallery: GalleryObj;
  collections: CollectionObj[];
  collectionHandler: CollectionHandler;
}

export const ExplorerGalleryContext = createContext<ExplorerGalleryContextObj>(
  {} as ExplorerGalleryContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const { gallery } = useGallery(params.id);
  const { collections, _collectionHandler } = useCollections(gallery.id);

  const context: ExplorerGalleryContextObj = {
    gallery,
    collections,
    collectionHandler: _collectionHandler,
  };

  return (
    <ExplorerGalleryContext.Provider value={context}>
      <CollectionsView />
    </ExplorerGalleryContext.Provider>
  );
}

export default insideCosmos(Page);
