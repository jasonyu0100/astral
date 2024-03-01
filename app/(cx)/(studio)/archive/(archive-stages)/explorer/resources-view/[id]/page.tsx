'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import {
  CollectionResourcesHandler,
  useCollectionResources,
} from '@/(logic)/internal/handler/explorer/resources/main';
import { useCollection } from '@/(logic)/internal/handler/explorer/collection/main';
import { useGallery } from '@/(logic)/internal/handler/explorer/gallery/main';
import { ResourcesView } from './view';

interface ExplorerCollectionContextObj {
  gallery: GalleryObj;
  collection: CollectionObj;
  resources: ResourceObj[];
  resourceHandler: CollectionResourcesHandler;
}

export const ExplorerCollectionContext =
  createContext<ExplorerCollectionContextObj>(
    {} as ExplorerCollectionContextObj,
  );

function Page({ params }: { params: { id: string } }) {
  const { collection } = useCollection(params.id);
  const { gallery } = useGallery(collection.galleryId);
  const { resources, _resourceHandler } = useCollectionResources(params.id);

  const context = {
    gallery,
    collection,
    resources,
    resourceHandler: _resourceHandler,
  };

  return (
    <ExplorerCollectionContext.Provider value={context}>
      <ResourcesView />
    </ExplorerCollectionContext.Provider>
  );
}

export default insideCosmos(Page);
