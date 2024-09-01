import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarListMode,
  SpaceMapSidebarMode,
} from '../../controller/map/main';
import {
  ContextForSpaceMapSidebar,
  SpaceMapSidebarMediaMode,
} from '../../page';
import { SpaceMapSidebarContainer } from './container/main';
import { SpaceMapSidebarIdeas } from './idea-explorer/ideas/main';
import { SpaceMapSidebarScenes } from './idea-explorer/scenes/main';
import { SpaceMapGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpaceMapSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpaceMapCollectionResourcesMode } from './media-explorer/(resources)/main';

export function SpaceMapSidebar() {
  const mapSidebarController = useContext(ContextForSpaceMapSidebar);
  const mapController = useContext(ContextForSpaceMap);

  return (
    <SpaceMapSidebarContainer>
      {mapController.sidebarMode === SpaceMapSidebarMode.LIST ? (
        <>
          {mapController.listSceneMode === SpaceMapSidebarListMode.SCENES && (
            <SpaceMapSidebarScenes />
          )}
          {mapController.listSceneMode === SpaceMapSidebarListMode.IDEAS && (
            <SpaceMapSidebarIdeas />
          )}
        </>
      ) : (
        <>
          {mapSidebarController.mode === SpaceMapSidebarMediaMode.Home && (
            <SpaceMapSidebarHomeGallerysMode />
          )}
          {mapSidebarController.mode === SpaceMapSidebarMediaMode.Gallery && (
            <SpaceMapGalleryCollectionsMode />
          )}
          {mapSidebarController.mode ===
            SpaceMapSidebarMediaMode.Collection && (
            <SpaceMapCollectionResourcesMode />
          )}
        </>
      )}
    </SpaceMapSidebarContainer>
  );
}
