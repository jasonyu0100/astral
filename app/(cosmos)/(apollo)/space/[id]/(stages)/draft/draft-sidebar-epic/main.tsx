import { GalleryObj } from '@/tables/gallery/main';
import { createContext, useState } from 'react';
import { DraftSidebarView } from './view';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { ResourceObj } from '@/tables/resource/main';
import { useGallerys } from '@/handler/gallerys/main';
import { useGlobalUser } from '@/state/main';
import { useCollections } from '@/handler/collections/main';
import {
  CollectionResourcesHandler,
  useCollectionResources,
} from '@/handler/resources/main';

export enum SidebarMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
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
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Home);
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
      changeSidebarMode(SidebarMode.Home);
    },
    goToGalleryView: () => {
      changeSidebarMode(SidebarMode.Gallery);
    },
    goToCollectionView: () => {
      changeSidebarMode(SidebarMode.Collection);
    },
    goToGallery: (gallery: GalleryObj) => {
      _galleryHandler.goToGallery(gallery);
      changeSidebarMode(SidebarMode.Gallery);
    },
    goToCollection: (collection: CollectionObj) => {
      _collectionHandler.goToCollection(collection);
      changeSidebarMode(SidebarMode.Collection);
    },
  };

  const context: DraftSidebarContextObject = {
    gallery,
    collection,
    sidebarMode,
    gallerys,
    galleryId,
    collections,
    collectionId,
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
