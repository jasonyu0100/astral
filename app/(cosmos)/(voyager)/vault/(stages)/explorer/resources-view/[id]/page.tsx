'use client';
import { createContext } from 'react';
import ExploreResourcesView from './view';
import { GalleryObj } from '@/tables/gallery/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import insideCosmos from '@/utils/isAuth';
import { ResourceObj } from '@/tables/resource/main';
import {
  ResourcesModalContext,
  useResourceModal,
} from '../../../../../../(modals)/resources-modal/main';
import {
  CollectionResourcesHandler,
  useCollectionResources,
} from '@/handler/resources/main';
import { useCollection } from '@/handler/collection/main';
import { useGallery } from '@/handler/gallery/main';

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
        <ExploreResourcesView />
      </ResourcesModalContext.Provider>
    </ExploreCollectionContext.Provider>
  );
}

export default insideCosmos(Page);
