import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesViewChatSceneInput } from './input/main';
import { SpacesViewChatSceneList } from './list/main';

export function SpacesViewSidebarChatScene() {
  return (
    <div
      className='flex w-full flex-col'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {/* <SpacesViewChatSceneHeader /> */}
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpacesViewChatSceneList />
          <SpacesViewChatSceneInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
