'use client';
import { createContext } from 'react';
import ExploreResourcesView from './view';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import {
  ResourcesModalContext,
  useResourceModal,
} from '../../../../../../../(modals)/resources-modal/main';
import {
  CollectionResourcesHandler,
  useCollectionResources,
} from '@/(logic)/internal/handler/explorer/resources/main';
import { useCollection } from '@/(logic)/internal/handler/explorer/collection/main';
import { useGallery } from '@/(logic)/internal/handler/explorer/gallery/main';
import { ResourcesModalView } from '@/(modals)/resources-modal/view';

interface ExploreCollectionContextObj {
  gallery: GalleryObj;
  collection: CollectionObj;
  resources: ResourceObj[];
  resourceHandler: CollectionResourcesHandler;
}

export const ExploreCollectionContext =
  createContext<ExploreCollectionContextObj>({} as ExploreCollectionContextObj);

function Page({ params }: { params: { id: string } }) {
  const { collection } = useCollection(params.id);
  const { gallery } = useGallery(collection.galleryId);
  const { resources, _resourceHandler } = useCollectionResources(params.id);
  const modalContext = useResourceModal();

  const context = {
    gallery,
    collection,
    resources,
    resourceHandler: _resourceHandler,
  };

  return (
    <ExploreCollectionContext.Provider value={context}>
      <ResourcesModalContext.Provider value={modalContext}>
        <ResourcesModalView />
        <ExploreResourcesView />
      </ResourcesModalContext.Provider>
    </ExploreCollectionContext.Provider>
  );
}

export default insideCosmos(Page);
