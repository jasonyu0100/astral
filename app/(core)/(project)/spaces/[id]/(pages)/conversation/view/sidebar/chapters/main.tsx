import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesConversationSidebarChaptersList } from './list/main';

export function SpacesConversationSidebarChapters() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassAreaContainer
        name={SpacesConversationSidebarChapters.name}
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
      >
        <SpacesConversationSidebarChaptersList />
      </GlassAreaContainer>
    </div>
  );
}
