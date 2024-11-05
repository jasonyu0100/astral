import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesSpaceChatSceneInput } from './input/main';
import { SpacesSpaceChatSceneList } from './list/main';

export function SpacesSpaceSidebarChatScene() {
  return (
    <div
      className='flex w-full flex-col'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {/* <SpacesSpaceChatSceneHeader /> */}
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpacesSpaceChatSceneList />
          <SpacesSpaceChatSceneInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
