import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesIdeasChatSceneInput } from './input/main';
import { SpacesIdeasChatSceneList } from './list/main';

export function SpacesIdeasSidebarChatScene() {
  return (
    <div
      className='flex w-full flex-col'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {/* <SpacesIdeasChatSceneHeader /> */}
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpacesIdeasChatSceneList />
          <SpacesIdeasChatSceneInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
