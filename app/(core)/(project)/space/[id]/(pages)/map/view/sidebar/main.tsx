import { GalleryObj } from '@/(model)/media/gallery/main';
import { createContext, useState } from 'react';
import { MapSidebarView } from './view';
import { CollectionObj } from '@/(model)/media/collection/main';
import {
  GallerysHandlerContext,
  useGallerysHandler,
} from '@/(controller)/explorer/gallerys/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  CollectionsHandlerContext,
  useCollectionsHandler,
} from '@/(controller)/explorer/collections/main';
import {
  ResourcesHandlerContext,
  useResourcesHandler,
} from '@/(controller)/explorer/resources/main';
import {
  ArchiveSidebarCreateModalContext,
  useArchiveSidebarCreateModal,
} from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/main';
import { ArchiveSidebarCreateModalView } from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/view';

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
export interface MapSidebarContextObject {
  sidebarMode: SidebarMode;
  sidebarHandler: SidebarHandler;
}

export const MapSidebarContext = createContext<MapSidebarContextObject>(
  {} as MapSidebarContextObject,
);

export function MapSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Gallerys);
  const user = useGlobalUser((state) => state.user);
  const gallerysHandler = useGallerysHandler(user?.id);
  const collectionsHandler = useCollectionsHandler(
    gallerysHandler.galleryId,
    user?.id,
  );
  const resourcesHandler = useResourcesHandler(
    collectionsHandler.collectionId,
    user?.id,
  );

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
      gallerysHandler.galleryActions.goToGallery(gallery);
      changeSidebarMode(SidebarMode.Collections);
    },
    goToCollection: (collection: CollectionObj) => {
      collectionsHandler.collectionActions.goToCollection(collection);
      changeSidebarMode(SidebarMode.Resources);
    },
  };

  const mapContext: MapSidebarContextObject = {
    sidebarMode,
    sidebarHandler,
  };

  const modalContext = useArchiveSidebarCreateModal();

  return (
    <MapSidebarContext.Provider value={mapContext}>
      <GallerysHandlerContext.Provider value={gallerysHandler}>
        <CollectionsHandlerContext.Provider value={collectionsHandler}>
          <ResourcesHandlerContext.Provider value={resourcesHandler}>
            <ArchiveSidebarCreateModalContext.Provider value={modalContext}>
              <ArchiveSidebarCreateModalView />
              <MapSidebarView />
            </ArchiveSidebarCreateModalContext.Provider>
          </ResourcesHandlerContext.Provider>
        </CollectionsHandlerContext.Provider>
      </GallerysHandlerContext.Provider>
    </MapSidebarContext.Provider>
  );
}
