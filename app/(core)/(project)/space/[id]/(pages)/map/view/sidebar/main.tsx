import {
  ContextForSidebarModals,
  useControllerForSidebarModals,
} from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/sidebar/main';
import { SidebarModalsView } from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/sidebar/view';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { GalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { GalleryObj } from '@/(server)/(model)/gallery/main';
import { createContext, useContext, useState } from 'react';
import { SpaceMapSidebarView } from './view';

export enum SpaceMapSidebarMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}
interface SpaceMapSidebarActions {
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
}
export interface SpaceMapSidebarContextObject {
  mode: SpaceMapSidebarMode;
  actions: SpaceMapSidebarActions;
}

export const SpaceMapSidebarContext =
  createContext<SpaceMapSidebarContextObject>(
    {} as SpaceMapSidebarContextObject,
  );

export function SpaceMapSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SpaceMapSidebarMode.Home);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);

  const sidebarHandler: SpaceMapSidebarActions = {
    goToHome: () => {
      changeSidebarMode(SpaceMapSidebarMode.Home);
    },
    goToGallery: (gallery: GalleryObj) => {
      galleryListController.actions.stateActions.select(gallery);
      changeSidebarMode(SpaceMapSidebarMode.Gallery);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionListController.actions.stateActions.select(collection);
      changeSidebarMode(SpaceMapSidebarMode.Collection);
    },
  };

  const boardContext: SpaceMapSidebarContextObject = {
    mode: sidebarMode,
    actions: sidebarHandler,
  };

  const modalContext = useControllerForSidebarModals();

  return (
    <SpaceMapSidebarContext.Provider value={boardContext}>
      <ContextForGalleryList.Provider value={galleryListController}>
        <ContextForGalleryCollectionList.Provider
          value={collectionListController}
        >
          <ContextForSidebarModals.Provider value={modalContext}>
            <SidebarModalsView />
            <SpaceMapSidebarView />
          </ContextForSidebarModals.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryList.Provider>
    </SpaceMapSidebarContext.Provider>
  );
}
