import { useContext } from 'react';
import {
  ContextForSpacesScene,
  SpacesSceneSidebarContentMode,
  SpacesSceneSidebarMediaMode,
} from '../../controller/main';
import { SpacesSceneSidebarChapters } from './chapters/main';
import { SpacesSceneSidebarContainer } from './container/main';
import { SpacesSceneSidebarHeader } from './header/main';
import { SpacesSceneGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpacesSceneSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpacesSceneCollectionResourcesMode } from './media-explorer/(resources)/main';
import { SpacesSceneSidebarChatScene } from './scene-chat/main';

export function SpacesSceneSidebar() {
  const {
    state: { sidebarContentMode, sidebarMediaMode },
  } = useContext(ContextForSpacesScene);

  return (
    <SpacesSceneSidebarContainer>
      <SpacesSceneSidebarHeader />
      {sidebarContentMode === SpacesSceneSidebarContentMode.JOURNAL && (
        <>
          {sidebarMediaMode === SpacesSceneSidebarMediaMode.Home && (
            <SpacesSceneSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpacesSceneSidebarMediaMode.Gallery && (
            <SpacesSceneGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpacesSceneSidebarMediaMode.Collection && (
            <SpacesSceneCollectionResourcesMode />
          )}
        </>
      )}
      {sidebarContentMode === SpacesSceneSidebarContentMode.CHAT_SCENE && (
        <SpacesSceneSidebarChatScene />
      )}
      {sidebarContentMode === SpacesSceneSidebarContentMode.CHAPTERS && (
        <>
          <SpacesSceneSidebarChapters />
        </>
      )}
    </SpacesSceneSidebarContainer>
  );
}
