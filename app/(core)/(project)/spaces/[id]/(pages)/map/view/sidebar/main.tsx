import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarContentMode,
  SpacesMapSidebarMediaMode,
} from '../../controller/main';
import { SpacesMapSidebarChapters } from './chapters/main';
import { SpacesMapSidebarContainer } from './container/main';
import { SpacesMapSidebarHeader } from './header/main';
import { SpacesMapGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpacesMapSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpacesMapCollectionResourcesMode } from './media-explorer/(resources)/main';
import { SpacesMapSidebarChatScene } from './scene-chat/main';

export function SpacesMapSidebar() {
  const {
    state: { sidebarContentMode, sidebarMediaMode },
  } = useContext(ContextForSpacesMap);

  return (
    <SpacesMapSidebarContainer>
      <SpacesMapSidebarHeader />
      {sidebarContentMode === SpacesMapSidebarContentMode.EXPLORER && (
        <>
          {sidebarMediaMode === SpacesMapSidebarMediaMode.Home && (
            <SpacesMapSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpacesMapSidebarMediaMode.Gallery && (
            <SpacesMapGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpacesMapSidebarMediaMode.Collection && (
            <SpacesMapCollectionResourcesMode />
          )}
        </>
      )}
      {sidebarContentMode === SpacesMapSidebarContentMode.CHAT_SCENE && (
        <SpacesMapSidebarChatScene />
      )}
      {sidebarContentMode === SpacesMapSidebarContentMode.CHAPTERS && (
        <>
          <SpacesMapSidebarChapters />
        </>
      )}
    </SpacesMapSidebarContainer>
  );
}
