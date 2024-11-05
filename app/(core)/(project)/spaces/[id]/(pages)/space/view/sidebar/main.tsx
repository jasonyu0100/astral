import { useContext } from 'react';
import {
  ContextForSpaceSpace,
  SpaceSpaceSidebarContentMode,
  SpaceSpaceSidebarMediaMode,
} from '../../controller/main';
import { SpaceSpaceSidebarChapters } from './chapters/main';
import { SpaceSpaceSidebarContainer } from './container/main';
import { SpaceSpaceSidebarHeader } from './header/main';
import { SpaceSpaceGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpaceSpaceSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpaceSpaceCollectionResourcesMode } from './media-explorer/(resources)/main';
import { SpaceSpaceSidebarChatScene } from './scene-chat/main';

export function SpaceSpaceSidebar() {
  const {
    state: { sidebarContentMode, sidebarMediaMode },
  } = useContext(ContextForSpaceSpace);

  return (
    <SpaceSpaceSidebarContainer>
      <SpaceSpaceSidebarHeader />
      {sidebarContentMode === SpaceSpaceSidebarContentMode.JOURNAL && (
        <>
          {sidebarMediaMode === SpaceSpaceSidebarMediaMode.Home && (
            <SpaceSpaceSidebarHomeGallerysMode />
          )}
          {sidebarMediaMode === SpaceSpaceSidebarMediaMode.Gallery && (
            <SpaceSpaceGalleryCollectionsMode />
          )}
          {sidebarMediaMode === SpaceSpaceSidebarMediaMode.Collection && (
            <SpaceSpaceCollectionResourcesMode />
          )}
        </>
      )}
      {sidebarContentMode === SpaceSpaceSidebarContentMode.CHAT_SCENE && (
        <SpaceSpaceSidebarChatScene />
      )}
      {sidebarContentMode === SpaceSpaceSidebarContentMode.CHAPTERS && (
        <>
          <SpaceSpaceSidebarChapters />
        </>
      )}
    </SpaceSpaceSidebarContainer>
  );
}
