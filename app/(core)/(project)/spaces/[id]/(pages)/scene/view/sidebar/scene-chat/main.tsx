import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesSceneChatSceneInput } from './input/main';
import { SpacesSceneChatSceneList } from './list/main';

export function SpacesSceneSidebarChatScene() {
  return (
    <div
      className='flex w-full flex-col'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {/* <SpacesSceneChatSceneHeader /> */}
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpacesSceneChatSceneList />
          <SpacesSceneChatSceneInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
