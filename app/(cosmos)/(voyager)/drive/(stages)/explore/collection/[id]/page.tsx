'use client';
import { createContext } from 'react';
import DriveFolderView from './view';
import { GalleryObj } from '@/tables/gallery/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import insideCosmos from '@/utils/isAuth';
import { ResourceObj } from '@/tables/resource/main';
import { ResourceHandler, useResources } from '@/(cosmos)/(apollo)/space/[id]/handler/resources/main';
import { useCollection } from '@/(cosmos)/(apollo)/space/[id]/handler/collection/main';
import { useGallery } from '@/(cosmos)/(apollo)/space/[id]/handler/gallery/main';

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

  const context = {
    gallery,
    collection,
    resources,
    resourceHandler: _resourceHandler,
  };

  return (
    <ExploreCollectionContext.Provider value={context}>
      <DriveFolderView />
    </ExploreCollectionContext.Provider>
  );
}

export default insideCosmos(Page);
