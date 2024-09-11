import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarContentMode,
  SpacesMapSidebarMediaMode,
  SpacesMapSidebarMode,
} from '../../controller/main';
import { SpacesMapChatExplorer } from './chat-explorer/main';
import { SpacesMapSidebarContainer } from './container/main';
import { SpacesMapSidebarIdeas } from './idea-explorer/ideas/main';
import { SpacesMapSidebarScenes } from './idea-explorer/scenes/main';
import { SpacesMapGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpacesMapSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpacesMapCollectionResourcesMode } from './media-explorer/(resources)/main';

export function SpacesMapSidebar() {
  const {
    state: {
      sidebarContentMode: sidebarMode,
      sidebarMode: listSceneMode,
      sidebarMediaMode,
    },
  } = useContext(ContextForSpacesMap);

  return (
    <SpacesMapSidebarContainer>
      {sidebarMode === SpacesMapSidebarContentMode.LIST && (
        <>
          {listSceneMode === SpacesMapSidebarMode.SCENES && (
            <SpacesMapSidebarScenes />
          )}
          {listSceneMode === SpacesMapSidebarMode.IDEAS && (
            <SpacesMapSidebarIdeas />
          )}
        </>
      )}
      {sidebarMode === SpacesMapSidebarContentMode.MEDIA && (
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

      {sidebarMode === SpacesMapSidebarContentMode.CHAT && (
        <SpacesMapChatExplorer />
      )}
    </SpacesMapSidebarContainer>
  );
}
