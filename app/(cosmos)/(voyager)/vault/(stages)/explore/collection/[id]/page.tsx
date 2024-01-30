'use client';
import { createContext } from 'react';
import ExploreCollectionView from './view';
import { GalleryObj } from '@/tables/gallery/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import insideCosmos from '@/utils/isAuth';
import { ResourceObj } from '@/tables/resource/main';
import {
  CollectionModalContext,
  useCollectionModalContext,
} from './collection-epic/modal/main';
import { ResourceHandler, useResources } from '@/(cosmos)/handler/resources/main';
import { useCollection } from '@/(cosmos)/handler/collection/main';
import { useGallery } from '@/(cosmos)/handler/gallery/main';

interface ExploreCollectionContextObj {
  gallery: GalleryObj;
  collection: CollectionObj;
  resources: ResourceObj[];
  resourceHandler: ResourceHandler;
}

export const ExploreCollectionContext =
  createContext<ExploreCollectionContextObj>({} as ExploreCollectionContextObj);

function Page({ params }: { params: { id: string } }) {
  const { collection } = useCollection(params.id);
  const { gallery } = useGallery(collection.galleryId);
  const { resources, _resourceHandler } = useResources(params.id);
  const modalContext = useCollectionModalContext();

  const context = {
    gallery,
    collection,
    resources,
    resourceHandler: _resourceHandler,
  };

  return (
    <ExploreCollectionContext.Provider value={context}>
      <CollectionModalContext.Provider value={modalContext}>
        <ExploreCollectionView />
      </CollectionModalContext.Provider>
    </ExploreCollectionContext.Provider>
  );
}

export default insideCosmos(Page);
