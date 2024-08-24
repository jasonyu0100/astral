import { useContext } from 'react';
import { ContextForSpaceMapSidebar, SpaceMapSidebarMode } from '../../page';
import { SpaceMapSidebarContainer } from './container/main';
import { SpaceMapGalleryCollectionsMode } from './modes/(gallery)/main';
import { SpaceMapSidebarHomeGallerysMode } from './modes/(home)/main';
import { SpaceMapCollectionResourcesMode } from './modes/(resources)/main';

export function SpaceMapSidebarView() {
  const { mode } = useContext(ContextForSpaceMapSidebar);

  return (
    <SpaceMapSidebarContainer>
      <>
        {mode === SpaceMapSidebarMode.Home && (
          <SpaceMapSidebarHomeGallerysMode />
        )}
        {mode === SpaceMapSidebarMode.Gallery && (
          <SpaceMapGalleryCollectionsMode />
        )}
        {mode === SpaceMapSidebarMode.Collection && (
          <SpaceMapCollectionResourcesMode />
        )}
      </>
    </SpaceMapSidebarContainer>
  );
}
