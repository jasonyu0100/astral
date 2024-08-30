import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceChatSidebarChaptersAdd } from './add/main';
import { SpaceChatSidebarChaptersList } from './list/main';

export function SpaceChatSidebarChapters() {
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          name={SpaceChatSidebarChapters.name}
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
        >
          <div className='flex w-full flex-col'>
            <SpaceChatSidebarChaptersList />
            <SpaceChatSidebarChaptersAdd />
          </div>
        </GlassAreaContainer>
      </div>
    </>
  );
}
