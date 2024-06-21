import { useContext } from 'react';
import { SpaceMapSidebarContainer } from './container/main';
import { SpaceMapSidebarContext, SpaceMapSidebarMode } from './main';
import { SpaceMapGalleryCollectionsMode } from './modes/(gallery)/main';
import { SpaceMapSidebarHomeGallerysMode } from './modes/(home)/main';
import { SpaceMapCollectionResourcesMode } from './modes/(resources)/main';

export function SpaceMapSidebarView() {
  const { mode: sidebarMode } = useContext(SpaceMapSidebarContext);

  return (
    <SpaceMapSidebarContainer>
      <>
        {sidebarMode === SpaceMapSidebarMode.Home && (
          <SpaceMapSidebarHomeGallerysMode />
        )}
        {sidebarMode === SpaceMapSidebarMode.Gallery && (
          <SpaceMapGalleryCollectionsMode />
        )}
        {sidebarMode === SpaceMapSidebarMode.Collection && (
          <SpaceMapCollectionResourcesMode />
        )}
      </>
    </SpaceMapSidebarContainer>
  );
}
