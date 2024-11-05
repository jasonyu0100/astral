import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpaceSpaceChatSceneInput } from './input/main';
import { SpaceSpaceChatSceneList } from './list/main';

export function SpaceSpaceSidebarChatScene() {
  return (
    <div
      className='flex w-full flex-col'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {/* <SpaceSpaceChatSceneHeader /> */}
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpaceSpaceChatSceneList />
          <SpaceSpaceChatSceneInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
