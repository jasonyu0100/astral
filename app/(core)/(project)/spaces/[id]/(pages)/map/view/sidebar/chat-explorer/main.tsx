import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpacesMapChatExplorerHeader } from './header/main';
import { SpacesMapChatExplorerInput } from './input/main';
import { SpacesMapChatExplorerList } from './list/main';

export function SpacesMapChatExplorer() {
  return (
    <div className='flex w-full flex-col' style={{ height: '100%' }}>
      <SpacesMapChatExplorerHeader />
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <SpacesMapChatExplorerList />
          <SpacesMapChatExplorerInput />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
