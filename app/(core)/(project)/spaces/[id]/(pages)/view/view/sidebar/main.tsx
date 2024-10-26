import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewSidebarContentMode,
  SpacesViewSidebarMediaMode,
} from '../../../controller/main';
import { SpacesViewSidebarChapters } from './chapters/main';
import { SpacesViewSidebarContainer } from './container/main';
import { SpacesViewSidebarHeader } from './header/main';
import { SpacesViewGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpacesViewSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpacesViewCollectionResourcesMode } from './media-explorer/(resources)/main';

export function SpacesViewSidebar() {
  const {
    state: { sidebarContentMode, sidebarMediaMode },
  } = useContext(ContextForSpacesView);

  return (
    <SpacesViewSidebarContainer>
      <SpacesViewSidebarHeader />
      {sidebarContentMode === SpacesViewSidebarContentMode.EXPLORER && (
        <>
          {sidebarMediaMode === SpacesViewSidebarMediaMode.Home && (
            <SpacesViewSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpacesViewSidebarMediaMode.Gallery && (
            <SpacesViewGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpacesViewSidebarMediaMode.Collection && (
            <SpacesViewCollectionResourcesMode />
          )}
        </>
      )}
      {sidebarContentMode === SpacesViewSidebarContentMode.CHAPTERS && (
        <>
          <SpacesViewSidebarChapters />
        </>
      )}
    </SpacesViewSidebarContainer>
  );
}
