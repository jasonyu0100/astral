'use client';
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
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/(controller)/space/chapter/scene/idea/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import { GalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { GalleryObj } from '@/(server)/(model)/gallery/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import isAstralAuth from '@/(utils)/isAuth';
import { createContext, useState } from 'react';
import {
  ContextForSpaceMap,
  useControllerForSpaceMap,
} from './controller/map/main';
import { SpaceMapModals } from './modal/controller/main';
import { SpaceMapView } from './view/main';

export enum SpaceMapSidebarMediaMode {
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
  mode: SpaceMapSidebarMediaMode;
  actions: SpaceMapSidebarActions;
}

export const ContextForSpaceMapSidebar =
  createContext<SpaceMapSidebarContextObject>(
    {} as SpaceMapSidebarContextObject,
  );

function Page({ params }: { params: { id: string } }) {
  const mapController = useControllerForSpaceMap();
  const spaceMainController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user?.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  const [sidebarMode, changeSidebarMode] = useState(
    SpaceMapSidebarMediaMode.Gallery,
  );

  const actions: SpaceMapSidebarActions = {
    goToHome: () => {
      changeSidebarMode(SpaceMapSidebarMediaMode.Home);
    },
    goToGallery: (gallery: GalleryObj) => {
      galleryListController.actions.stateActions.select(gallery);
      changeSidebarMode(SpaceMapSidebarMediaMode.Gallery);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionListController.actions.stateActions.select(collection);
      changeSidebarMode(SpaceMapSidebarMediaMode.Collection);
    },
  };

  const sidebarController = {
    mode: sidebarMode,
    actions: actions,
  };

  return (
    <ContextForSpaceMap.Provider value={mapController}>
      <ContextForSpaceMapSidebar.Provider value={sidebarController}>
        <ContextForLoggedInUserObj.Provider value={user}>
          <ContextForSpaceMain.Provider value={spaceMainController}>
            <ContextForSpaceChapterList.Provider value={chapterListController}>
              <ContextForChapterSceneList.Provider value={sceneListController}>
                <ContextForSceneIdeaList.Provider value={ideaListController}>
                  <ContextForGalleryList.Provider value={galleryListController}>
                    <ContextForGalleryCollectionList.Provider
                      value={collectionListController}
                    >
                      <ContextForCollectionResourceList.Provider
                        value={resourceListController}
                      >
                        <SpaceMapModals>
                          <SpaceMapView />
                        </SpaceMapModals>
                      </ContextForCollectionResourceList.Provider>
                    </ContextForGalleryCollectionList.Provider>
                  </ContextForGalleryList.Provider>
                </ContextForSceneIdeaList.Provider>
              </ContextForChapterSceneList.Provider>
            </ContextForSpaceChapterList.Provider>
          </ContextForSpaceMain.Provider>
        </ContextForLoggedInUserObj.Provider>
      </ContextForSpaceMapSidebar.Provider>
    </ContextForSpaceMap.Provider>
  );
}

export default isAstralAuth(Page);
