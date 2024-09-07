import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpaceMapChatExplorerHeader } from './header/main';
import { SpaceMapChatExplorerList } from './list/main';
import { SpaceMapChatExplorerInput } from './search/main';

export function SpaceMapChatExplorer() {
  return (
    <div className='flex w-full flex-col' style={{ height: '100%' }}>
      <SpaceMapChatExplorerHeader />
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpaceMapChatExplorerList />
          <SpaceMapChatExplorerInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
