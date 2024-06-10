import { GalleryObj } from '@/(server)/(model)/gallery/main';
import { createContext, useState } from 'react';
import { MapSidebarView } from './view';
import { GalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForSidebarModals,
  useControllerForSidebarModals,
} from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/main';
import { SidebarModalsView } from '@/(core)/(dashboard)/(modals)/archive/sidebar/create/view';
import { ContextForGalleryList, useControllerForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ContextForGalleryCollectionList, useControllerForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForCollectionResourceList, useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';

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
  goToCollection: (section: GalleryCollectionObj) => void;
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
  const galleryListController = useControllerForGalleryList(user?.id);
  const collectionsHandler = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourcesHandler = useControllerForCollectionResourceList(
    collectionsHandler.state.objId,
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
      galleryListController.actions.stateActions.select(gallery);
      changeSidebarMode(SidebarMode.Collections);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionsHandler.actions.stateActions.select(collection);
      changeSidebarMode(SidebarMode.Resources);
    },
  };

  const mapContext: MapSidebarContextObject = {
    sidebarMode,
    sidebarHandler,
  };

  const modalContext = useControllerForSidebarModals();

  return (
    <MapSidebarContext.Provider value={mapContext}>
      <ContextForGalleryList.Provider value={galleryListController}>
        <ContextForGalleryCollectionList.Provider value={collectionsHandler}>
          <ContextForCollectionResourceList.Provider value={resourcesHandler}>
            <ContextForSidebarModals.Provider value={modalContext}>
              <SidebarModalsView />
              <MapSidebarView />
            </ContextForSidebarModals.Provider>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryList.Provider>
    </MapSidebarContext.Provider>
  );
}
