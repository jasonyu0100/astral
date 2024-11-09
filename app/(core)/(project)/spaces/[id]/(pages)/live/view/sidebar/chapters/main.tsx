import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesLiveSidebarChaptersAdd } from './add/main';
import { SpacesLiveSidebarChaptersChapter } from './item/main';
import { SpacesLiveSidebarChaptersProgress } from './progress/main';

export function SpacesLiveSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div
      className='flex w-full flex-col overflow-auto'
      style={{ height: '100%' }}
    >
      <SpacesLiveSidebarChaptersProgress />
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider value={chapter}>
              <SpacesLiveSidebarChaptersChapter />
            </ContextForSpaceChapterObj.Provider>
          ))}
          <HorizontalDivider />
          <SpacesLiveSidebarChaptersAdd />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
