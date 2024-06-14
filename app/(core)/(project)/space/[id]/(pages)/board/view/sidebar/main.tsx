import {
  ContextForSidebarModals,
  useControllerForSidebarModals,
} from '@/(core)/(project)/space/[id]/(pages)/board/(modal)/sidebar/main';
import { SidebarModalsView } from '@/(core)/(project)/space/[id]/(pages)/board/(modal)/sidebar/view';
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
import { SpaceBoardSidebarView } from './view';

export enum SpaceBoardSidebarMode {
  Gallerys = 'Gallerys',
  Collections = 'Collections',
  Resources = 'Resources',
}
interface SpaceBoardSidebarHandler {
  goToHomeView: () => void;
  goToGalleryView: () => void;
  goToCollectionView: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
}
export interface SpaceBoardSidebarContextObject {
  sidebarMode: SpaceBoardSidebarMode;
  sidebarHandler: SpaceBoardSidebarHandler;
}

export const SpaceBoardSidebarContext =
  createContext<SpaceBoardSidebarContextObject>(
    {} as SpaceBoardSidebarContextObject,
  );

export function SpaceBoardSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(
    SpaceBoardSidebarMode.Gallerys,
  );
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user?.id);
  const collectionsHandler = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourcesHandler = useControllerForCollectionResourceList(
    collectionsHandler.state.objId,
  );

  const sidebarHandler: SpaceBoardSidebarHandler = {
    goToHomeView: () => {
      changeSidebarMode(SpaceBoardSidebarMode.Gallerys);
    },
    goToGalleryView: () => {
      changeSidebarMode(SpaceBoardSidebarMode.Collections);
    },
    goToCollectionView: () => {
      changeSidebarMode(SpaceBoardSidebarMode.Resources);
    },
    goToGallery: (gallery: GalleryObj) => {
      galleryListController.actions.stateActions.select(gallery);
      changeSidebarMode(SpaceBoardSidebarMode.Collections);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionsHandler.actions.stateActions.select(collection);
      changeSidebarMode(SpaceBoardSidebarMode.Resources);
    },
  };

  const boardContext: SpaceBoardSidebarContextObject = {
    sidebarMode,
    sidebarHandler,
  };

  const modalContext = useControllerForSidebarModals();

  return (
    <SpaceBoardSidebarContext.Provider value={boardContext}>
      <ContextForGalleryList.Provider value={galleryListController}>
        <ContextForGalleryCollectionList.Provider value={collectionsHandler}>
          <ContextForCollectionResourceList.Provider value={resourcesHandler}>
            <ContextForSidebarModals.Provider value={modalContext}>
              <SidebarModalsView />
              <SpaceBoardSidebarView />
            </ContextForSidebarModals.Provider>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryList.Provider>
    </SpaceBoardSidebarContext.Provider>
  );
}
