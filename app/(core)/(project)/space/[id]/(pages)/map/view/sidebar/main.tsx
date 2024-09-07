import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarContentMode,
  SpaceMapSidebarMediaMode,
  SpaceMapSidebarMode,
} from '../../controller/map/main';
import { SpaceMapSidebarContainer } from './container/main';
import { SpaceMapSidebarIdeas } from './idea-explorer/ideas/main';
import { SpaceMapSidebarScenes } from './idea-explorer/scenes/main';
import { SpaceMapGalleryCollectionsMode } from './media-explorer/(gallery)/main';
import { SpaceMapSidebarHomeGallerysMode } from './media-explorer/(home)/main';
import { SpaceMapCollectionResourcesMode } from './media-explorer/(resources)/main';

export function SpaceMapSidebar() {
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );
  const messageListController = useContext(ContextForConversationMessageList);
  const {
    state: {
      sidebarContentMode: sidebarMode,
      sidebarMode: listSceneMode,
      sidebarMediaMode,
    },
  } = useContext(ContextForSpaceMap);

  return (
    <SpaceMapSidebarContainer>
      {sidebarMode === SpaceMapSidebarContentMode.LIST && (
        <>
          {listSceneMode === SpaceMapSidebarMode.SCENES && (
            <SpaceMapSidebarScenes />
          )}
          {listSceneMode === SpaceMapSidebarMode.IDEAS && (
            <SpaceMapSidebarIdeas />
          )}
        </>
      )}
      {sidebarMode === SpaceMapSidebarContentMode.MEDIA && (
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

      {sidebarMode === SpaceMapSidebarContentMode.CHAT && (
        <div className='flex w-full flex-col' style={{ height: '100%' }}>
          <GlassWindowFrame className='h-[4rem] w-full flex-shrink-0 shadow-glow'></GlassWindowFrame>
          <GlassWindowFrame className='h-full w-full flex-shrink-0'>
            <GlassWindowContents className='flex h-full w-full flex-col'>
              <div
                className='flex w-full flex-col space-y-[1rem] overflow-auto p-[1rem]'
                style={{ height: 'calc(100% - 9rem)' }}
              >
                {messageListController.state.objs.map((message) => (
                  <div className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[1rem] text-white'>
                    {message.message}
                  </div>
                ))}
              </div>
              <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0'>
                <GlassWindowContents className='p-[1rem]'>
                  <GlassWindowFrame
                    className='h-full w-full flex-shrink-0'
                    roundedFx={roundedFx['rounded-full']}
                  >
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
            </GlassWindowContents>
          </GlassWindowFrame>
        </div>
      )}
    </SpaceMapSidebarContainer>
  );
}
