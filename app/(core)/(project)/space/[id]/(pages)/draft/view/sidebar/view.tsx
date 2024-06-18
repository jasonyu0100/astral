import { useContext } from 'react';
import { SpaceDraftSidebarContainer } from './container/main';
import { SpaceDraftSidebarContext, SpaceDraftSidebarMode } from './main';
import { SpaceDraftGalleryCollectionsMode } from './modes/(gallery)/main';
import { SpaceDraftSidebarHomeGallerysMode } from './modes/(home)/main';
import { SpaceDraftCollectionResourcesMode } from './modes/(resources)/main';

export function SpaceDraftSidebarView() {
  const { mode: sidebarMode } = useContext(SpaceDraftSidebarContext);

  return (
    <SpaceDraftSidebarContainer>
      <>
        {sidebarMode === SpaceDraftSidebarMode.Home && (
          <SpaceDraftSidebarHomeGallerysMode />
        )}
        {sidebarMode === SpaceDraftSidebarMode.Gallery && (
          <SpaceDraftGalleryCollectionsMode />
        )}
        {sidebarMode === SpaceDraftSidebarMode.Collection && (
          <SpaceDraftCollectionResourcesMode />
        )}
      </>
    </SpaceDraftSidebarContainer>
  );
}
