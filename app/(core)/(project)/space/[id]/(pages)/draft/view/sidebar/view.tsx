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
        {sidebarMode === SpaceDraftSidebarMode.Gallerys && (
          <SpaceDraftSidebarHomeGallerysMode />
        )}
        {sidebarMode === SpaceDraftSidebarMode.Collections && (
          <SpaceDraftGalleryCollectionsMode />
        )}
        {sidebarMode === SpaceDraftSidebarMode.Resources && (
          <SpaceDraftCollectionResourcesMode />
        )}
      </>
    </SpaceDraftSidebarContainer>
  );
}
