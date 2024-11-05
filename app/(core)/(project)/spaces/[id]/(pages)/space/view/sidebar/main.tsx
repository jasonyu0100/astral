import { useContext } from 'react';
import {
  ContextForSpacesSpace,
  SpacesSpaceSidebarContentMode,
  SpacesSpaceSidebarMediaMode,
} from '../../controller/main';
import { SpacesSpaceSidebarChapters } from './chapters/main';
import { SpacesSpaceSidebarContainer } from './container/main';
import { SpacesSpaceSidebarHeader } from './header/main';
import { SpacesSpaceGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpacesSpaceSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpacesSpaceCollectionResourcesMode } from './media-explorer/(resources)/main';
import { SpacesSpaceSidebarChatScene } from './scene-chat/main';

export function SpacesSpaceSidebar() {
  const {
    state: { sidebarContentMode, sidebarMediaMode },
  } = useContext(ContextForSpacesSpace);

  return (
    <SpacesSpaceSidebarContainer>
      <SpacesSpaceSidebarHeader />
      {sidebarContentMode === SpacesSpaceSidebarContentMode.JOURNAL && (
        <>
          {sidebarMediaMode === SpacesSpaceSidebarMediaMode.Home && (
            <SpacesSpaceSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpacesSpaceSidebarMediaMode.Gallery && (
            <SpacesSpaceGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpacesSpaceSidebarMediaMode.Collection && (
            <SpacesSpaceCollectionResourcesMode />
          )}
        </>
      )}
      {sidebarContentMode === SpacesSpaceSidebarContentMode.CHAT_SCENE && (
        <SpacesSpaceSidebarChatScene />
      )}
      {sidebarContentMode === SpacesSpaceSidebarContentMode.CHAPTERS && (
        <>
          <SpacesSpaceSidebarChapters />
        </>
      )}
    </SpacesSpaceSidebarContainer>
  );
}
