import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesPublicSidebarChaptersAdd } from './add/main';
import { SpacesPublicSidebarChaptersChapter } from './item/main';
import { SpacesPublicSidebarChaptersProgress } from './progress/main';

export function SpacesPublicSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div
      className='flex w-full flex-col overflow-auto'
      style={{ height: '100%' }}
    >
      <SpacesPublicSidebarChaptersProgress />
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider value={chapter}>
              <SpacesPublicSidebarChaptersChapter />
            </ContextForSpaceChapterObj.Provider>
          ))}
          <HorizontalDivider />
          <SpacesPublicSidebarChaptersAdd />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
