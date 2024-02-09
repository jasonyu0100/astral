import { GalleryObj } from '@/tables/gallery/main';
import { createContext, useState } from 'react';
import { DraftSidebarView } from './view';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { ResourceObj } from '@/tables/resource/main';
import { GalleryHandler, useGallerys } from '@/handler/explorer/gallerys/main';
import { useGlobalUser } from '@/state/main';
import { CollectionHandler, useCollections } from '@/handler/explorer/collections/main';
import {
  CollectionResourcesHandler,
  useCollectionResources,
} from '@/handler/explorer/resources/main';

export enum SidebarMode {
  Gallerys = 'Gallerys',
  Collections = 'Collections',
  Resources = 'Resources',
}
interface SidebarHandler {
  goToHomeView: () => void;
  goToGalleryView: () => void;
  goToCollectionView: () => void;
  goToGallery: (section: GalleryObj) => void;
  goToCollection: (section: CollectionObj) => void;
}
export interface DraftSidebarContextObject {
  gallery?: GalleryObj;
  collection?: CollectionObj;
  sidebarMode: SidebarMode;
  galleryHandler: GalleryHandler;
  collectionHandler: CollectionHandler;
  gallerys: GalleryObj[];
  galleryId: string;
  collections: CollectionObj[];
  collectionId: string;
  resources: ResourceObj[];
  searchResults: ResourceObj[];
  sidebarHandler: SidebarHandler;
  resourceHandler: CollectionResourcesHandler;
}

export const DraftSidebarContext = createContext<DraftSidebarContextObject>(
  {} as DraftSidebarContextObject,
);

export function DraftSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Gallerys);
  const [state, actions] = useGlobalUser();
  const { gallerys, gallery, galleryId, _galleryHandler } = useGallerys(
    state.user.id,
  );
  const { collections, collection, collectionId, _collectionHandler } =
    useCollections(galleryId);
  const { resources, resource, resourceId, searchResults, _resourceHandler } =
    useCollectionResources(collectionId);

  const sidebarHandler: SidebarHandler = {
    goToHomeView: () => {
      changeSidebarMode(SidebarMode.Gallerys);
    },
    goToGalleryView: () => {
      changeSidebarMode(SidebarMode.Collections);
    },
    goToCollectionView: () => {
      changeSidebarMode(SidebarMode.Resources);
    },
    goToGallery: (gallery: GalleryObj) => {
      _galleryHandler.goToGallery(gallery);
      changeSidebarMode(SidebarMode.Collections);
    },
    goToCollection: (collection: CollectionObj) => {
      _collectionHandler.goToCollection(collection);
      changeSidebarMode(SidebarMode.Resources);
    },
  };

  const context: DraftSidebarContextObject = {
    gallery,
    collection,
    sidebarMode,
    gallerys,
    galleryId,
    galleryHandler: _galleryHandler,
    collections,
    collectionId,
    collectionHandler: _collectionHandler,
    resources,
    searchResults,
    sidebarHandler,
    resourceHandler: _resourceHandler,
  };

  return (
    <DraftSidebarContext.Provider value={context}>
      <DraftSidebarView />
    </DraftSidebarContext.Provider>
  );
}
