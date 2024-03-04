'use client';
import { createContext } from 'react';
import { CollectionsView } from './view';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGallery } from '@/(logic)/internal/handler/explorer/gallerys/gallery/main';
import {
  CollectionHandler,
  useCollections,
} from '@/(logic)/internal/handler/explorer/collections/main';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

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
  const user = useGlobalUser((state) => state.user);
  const { collections, _collectionHandler } = useCollections(
    gallery.id,
    user?.id,
  );

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
