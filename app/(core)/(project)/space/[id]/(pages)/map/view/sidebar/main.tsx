import {
  ContextForSidebarModals,
  useControllerForSidebarModals,
} from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/sidebar/main';
import { SidebarModalsView } from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/sidebar/view';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/(controller)/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/(controller)/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/(controller)/gallery/list';
import { GalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { GalleryObj } from '@/(server)/(model)/gallery/main';
import { createContext, useState } from 'react';
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
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user?.id);
  const collectionsHandler = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourcesHandler = useControllerForCollectionResourceList(
    collectionsHandler.state.objId,
  );

  const sidebarHandler: SpaceMapSidebarActions = {
    goToHome: () => {
      changeSidebarMode(SpaceMapSidebarMode.Home);
    },
    goToGallery: (gallery: GalleryObj) => {
      galleryListController.actions.stateActions.select(gallery);
      changeSidebarMode(SpaceMapSidebarMode.Gallery);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionsHandler.actions.stateActions.select(collection);
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
        <ContextForGalleryCollectionList.Provider value={collectionsHandler}>
          <ContextForCollectionResourceList.Provider value={resourcesHandler}>
            <ContextForSidebarModals.Provider value={modalContext}>
              <SidebarModalsView />
              <SpaceMapSidebarView />
            </ContextForSidebarModals.Provider>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryList.Provider>
    </SpaceMapSidebarContext.Provider>
  );
}
