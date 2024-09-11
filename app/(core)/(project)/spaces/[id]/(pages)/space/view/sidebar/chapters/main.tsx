import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceSidebarChaptersAdd } from './add/main';
import { SpacesSpaceSidebarChaptersList } from './list/main';

export function SpacesSpaceSidebarChapters() {
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          name={SpacesSpaceSidebarChapters.name}
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
        >
          <div className='flex w-full flex-col'>
            <SpacesSpaceSidebarChaptersList />
            <SpacesSpaceSidebarChaptersAdd />
          </div>
        </GlassAreaContainer>
      </div>
    </>
  );
}
