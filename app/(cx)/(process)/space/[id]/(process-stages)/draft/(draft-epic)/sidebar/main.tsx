import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { createContext, useState } from 'react';
import { DraftSidebarView } from './view';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import {
  GalleryHandler,
  useGallerys,
} from '@/(logic)/internal/handler/explorer/gallerys/main';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  CollectionHandler,
  useCollections,
} from '@/(logic)/internal/handler/explorer/collections/main';
import {
  CollectionResourcesHandler,
  useCollectionResources,
} from '@/(logic)/internal/handler/explorer/resources/main';
import { ArchiveSidebarCreateModalContext, useArchiveSidebarCreateModal } from '@/(modals)/(studio)/archive/sidebar/create/main';
import { ArchiveSidebarCreateModalView } from '@/(modals)/(studio)/archive/sidebar/create/view';

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
  const user = useGlobalUser((state) => state.user);
  const { gallerys, gallery, galleryId, _galleryHandler } = useGallerys(
    user?.id,
  );
  const { collections, collection, collectionId, _collectionHandler } =
    useCollections(galleryId, user?.id);
  const { resources, resource, resourceId, searchResults, _resourceHandler } =
    useCollectionResources(collectionId, user?.id);

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

  const draftContext: DraftSidebarContextObject = {
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

  const modalContext = useArchiveSidebarCreateModal();

  return (
    <DraftSidebarContext.Provider value={draftContext}>
      <ArchiveSidebarCreateModalContext.Provider value={modalContext}>
        <ArchiveSidebarCreateModalView/>
        <DraftSidebarView />
      </ArchiveSidebarCreateModalContext.Provider>
    </DraftSidebarContext.Provider>
  );
}
