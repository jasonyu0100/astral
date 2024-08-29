import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceIdeaSidebarChaptersAdd } from './add/main';
import { SpaceIdeaSidebarChaptersList } from './list/main';

export function SpaceIdeaSidebarChapters() {
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          name={SpaceIdeaSidebarChapters.name}
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
        >
          <div className='flex w-full flex-col'>
            <SpaceIdeaSidebarChaptersList />
            <SpaceIdeaSidebarChaptersAdd />
          </div>
        </GlassAreaContainer>
      </div>
    </>
  );
}
