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
import { SpaceMapView } from './view/main';

export enum PaletteState {
  HOME = 'Home',
  GALLERY = 'Gallery',
  COLLECTION = 'Collection',
}
interface PaletteActions {
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
}
export interface PaletteController {
  state: PaletteState;
  actions: PaletteActions;
}

export const ContextForPaletteController = createContext<PaletteController>(
  {} as PaletteController,
);

function Page({ params }: { params: { id: string } }) {
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
  const collectionsHandler = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourcesHandler = useControllerForCollectionResourceList(
    collectionsHandler.state.objId,
  );

  const [paletteMode, changePaletteMode] = useState(PaletteState.HOME);

  const sidebarHandler: PaletteActions = {
    goToHome: () => {
      changePaletteMode(PaletteState.HOME);
    },
    goToGallery: (gallery: GalleryObj) => {
      galleryListController.actions.stateActions.select(gallery);
      changePaletteMode(PaletteState.GALLERY);
    },
    goToCollection: (collection: GalleryCollectionObj) => {
      collectionsHandler.actions.stateActions.select(collection);
      changePaletteMode(PaletteState.COLLECTION);
    },
  };

  const palleteController: PaletteController = {
    state: paletteMode,
    actions: sidebarHandler,
  };

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForPaletteController.Provider value={palleteController}>
        <ContextForSpaceMain.Provider value={spaceMainController}>
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForChapterSceneList.Provider value={sceneListController}>
              <ContextForSceneIdeaList.Provider value={ideaListController}>
                <ContextForGalleryList.Provider value={galleryListController}>
                  <ContextForGalleryCollectionList.Provider
                    value={collectionsHandler}
                  >
                    <ContextForCollectionResourceList.Provider
                      value={resourcesHandler}
                    >
                      <SpaceMapView />
                    </ContextForCollectionResourceList.Provider>
                  </ContextForGalleryCollectionList.Provider>
                </ContextForGalleryList.Provider>
              </ContextForSceneIdeaList.Provider>
            </ContextForChapterSceneList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForPaletteController.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isVerseAuth(Page);
