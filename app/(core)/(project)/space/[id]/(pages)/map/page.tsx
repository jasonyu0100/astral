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
import isVerseAuth from '@/(utils)/isAuth';
import { createContext, useState } from 'react';
import {
  ContextForSpaceMapController,
  useControllerForSpaceMap,
} from './(controller)/map/main';
import { SpaceMapView } from './view/main';

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
    spaceMainController.state.obj.galleryId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  const [sidebarMode, changeSidebarMode] = useState(
    SpaceMapSidebarMode.Gallery,
  );

  const actions: SpaceMapSidebarActions = {
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

  const sidebarController = {
    mode: sidebarMode,
    actions: actions,
  };

  return (
    <ContextForSpaceMapController.Provider value={mapController}>
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
                        <SpaceMapView />
                      </ContextForCollectionResourceList.Provider>
                    </ContextForGalleryCollectionList.Provider>
                  </ContextForGalleryList.Provider>
                </ContextForSceneIdeaList.Provider>
              </ContextForChapterSceneList.Provider>
            </ContextForSpaceChapterList.Provider>
          </ContextForSpaceMain.Provider>
        </ContextForLoggedInUserObj.Provider>
      </ContextForSpaceMapSidebar.Provider>
    </ContextForSpaceMapController.Provider>
  );
}

export default isVerseAuth(Page);
