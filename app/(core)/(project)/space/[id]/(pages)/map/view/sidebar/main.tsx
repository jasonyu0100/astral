import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarContentMode,
  SpaceMapSidebarListMode,
  SpaceMapSidebarMediaMode,
} from '../../controller/map/main';
import { SpaceMapSidebarContainer } from './container/main';
import { SpaceMapSidebarIdeas } from './idea-explorer/ideas/main';
import { SpaceMapSidebarScenes } from './idea-explorer/scenes/main';
import { SpaceMapGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpaceMapSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpaceMapCollectionResourcesMode } from './media-explorer/(resources)/main';

export function SpaceMapSidebar() {
  const {
    state: { sidebarContentMode: sidebarMode, listSceneMode, sidebarMediaMode },
  } = useContext(ContextForSpaceMap);

  return (
    <SpaceMapSidebarContainer>
      {sidebarMode === SpaceMapSidebarContentMode.LIST ? (
        <>
          {listSceneMode === SpaceMapSidebarListMode.SCENES && (
            <SpaceMapSidebarScenes />
          )}
          {listSceneMode === SpaceMapSidebarListMode.IDEAS && (
            <SpaceMapSidebarIdeas />
          )}
        </>
      ) : (
        <>
          {sidebarMediaMode === SpaceMapSidebarMediaMode.Home && (
            <SpaceMapSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpaceMapSidebarMediaMode.Gallery && (
            <SpaceMapGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpaceMapSidebarMediaMode.Collection && (
            <SpaceMapCollectionResourcesMode />
          )}
        </>
      )}
    </SpaceMapSidebarContainer>
  );
}
