import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceSidebarChaptersList } from './list/main';

export function SpacesSpaceSidebarChapters() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassAreaContainer
        name={SpacesSpaceSidebarChapters.name}
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
      >
        <SpacesSpaceSidebarChaptersList />
      </GlassAreaContainer>
    </div>
  );
}
