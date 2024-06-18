import {
  ContextForSidebarModals,
  useControllerForSidebarModals,
} from '@/(core)/(project)/space/[id]/(pages)/draft/(modal)/sidebar/main';
import { SidebarModalsView } from '@/(core)/(project)/space/[id]/(pages)/draft/(modal)/sidebar/view';
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
import { SpaceDraftSidebarView } from './view';

export enum SpaceDraftSidebarMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}
interface SpaceDraftSidebarActions {
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
}
export interface SpaceDraftSidebarContextObject {
  mode: SpaceDraftSidebarMode;
  actions: SpaceDraftSidebarActions;
}

export const SpaceDraftSidebarContext =
  createContext<SpaceDraftSidebarContextObject>(
    {} as SpaceDraftSidebarContextObject,
  );

export function SpaceDraftSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SpaceDraftSidebarMode.Home);
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user?.id);
  const collectionsHandler = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourcesHandler = useControllerForCollectionResourceList(
    collectionsHandler.state.objId,
  );

  const sidebarHandler: SpaceDraftSidebarActions = {
    goToHome: () => {
      changeSidebarMode(SpaceDraftSidebarMode.Home);
    },
    goToGallery: (gallery: GalleryObj) => {
      galleryListController.actions.stateActions.select(gallery);
      changeSidebarMode(SpaceDraftSidebarMode.Gallery);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionsHandler.actions.stateActions.select(collection);
      changeSidebarMode(SpaceDraftSidebarMode.Collection);
    },
  };

  const boardContext: SpaceDraftSidebarContextObject = {
    mode: sidebarMode,
    actions: sidebarHandler,
  };

  const modalContext = useControllerForSidebarModals();

  return (
    <SpaceDraftSidebarContext.Provider value={boardContext}>
      <ContextForGalleryList.Provider value={galleryListController}>
        <ContextForGalleryCollectionList.Provider value={collectionsHandler}>
          <ContextForCollectionResourceList.Provider value={resourcesHandler}>
            <ContextForSidebarModals.Provider value={modalContext}>
              <SidebarModalsView />
              <SpaceDraftSidebarView />
            </ContextForSidebarModals.Provider>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryList.Provider>
    </SpaceDraftSidebarContext.Provider>
  );
}
