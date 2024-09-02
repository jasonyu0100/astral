'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/controller/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/controller/gallery/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/controller/space/chapter/scene/idea/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/controller/space/chapter/scene/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { GalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { GalleryObj } from '@/(server)/model/gallery/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const sceneId = searchParams.get('scene');
  const chapterId = searchParams.get('chapter');

  const mapController = useControllerForSpaceMap();
  const spaceMainController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
    chapterId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
    sceneId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(
    user?.id,
    spaceMainController.state.obj.galleryId,
  );
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
    spaceMainController.state.obj.collectionId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  const [sidebarMode, changeSidebarMode] = useState(
    SpaceMapSidebarMediaMode.Collection,
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
                      <ContextForSpaceMap.Provider value={mapController}>
                        <SpaceMapModals>
                          <SpaceMapView />
                        </SpaceMapModals>
                      </ContextForSpaceMap.Provider>
                    </ContextForCollectionResourceList.Provider>
                  </ContextForGalleryCollectionList.Provider>
                </ContextForGalleryList.Provider>
              </ContextForSceneIdeaList.Provider>
            </ContextForChapterSceneList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForLoggedInUserObj.Provider>
    </ContextForSpaceMapSidebar.Provider>
  );
}

export default isAstralAuth(Page);
