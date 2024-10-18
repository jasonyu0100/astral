import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpacesMapChatSceneInput } from './input/main';
import { SpacesMapChatSceneList } from './list/main';

export function SpacesMapSidebarChatScene() {
  return (
    <div className='flex w-full flex-col' style={{ height: '100%' }}>
      {/* <SpacesMapChatSceneHeader /> */}
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpacesMapChatSceneList />
          <SpacesMapChatSceneInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
