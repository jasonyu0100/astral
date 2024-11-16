import { useContext } from 'react';
import {
  ContextForSpacesIdeas,
  SpacesIdeasSidebarContentMode,
  SpacesIdeasSidebarMediaMode,
} from '../../controller/main';
import { SpacesIdeasSidebarChapters } from './chapters/main';
import { SpacesIdeasSidebarContainer } from './container/main';
import { SpacesIdeasSidebarHeader } from './header/main';
import { SpacesIdeasGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpacesIdeasSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpacesIdeasCollectionResourcesMode } from './media-explorer/(resources)/main';
import { SpacesIdeasSidebarChatScene } from './scene-chat/main';

export function SpacesIdeasSidebar() {
  const {
    state: { sidebarContentMode, sidebarMediaMode },
  } = useContext(ContextForSpacesIdeas);

  return (
    <SpacesIdeasSidebarContainer>
      <SpacesIdeasSidebarHeader />
      {sidebarContentMode === SpacesIdeasSidebarContentMode.UPLOADS && (
        <>
          {sidebarMediaMode === SpacesIdeasSidebarMediaMode.Home && (
            <SpacesIdeasSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpacesIdeasSidebarMediaMode.Gallery && (
            <SpacesIdeasGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpacesIdeasSidebarMediaMode.Collection && (
            <SpacesIdeasCollectionResourcesMode />
          )}
        </>
      )}
      {sidebarContentMode === SpacesIdeasSidebarContentMode.CHAT_SCENE && (
        <SpacesIdeasSidebarChatScene />
      )}
      {sidebarContentMode === SpacesIdeasSidebarContentMode.CHAPTERS && (
        <>
          <SpacesIdeasSidebarChapters />
        </>
      )}
    </SpacesIdeasSidebarContainer>
  );
}
