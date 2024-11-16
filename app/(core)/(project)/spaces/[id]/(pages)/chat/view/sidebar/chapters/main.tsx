import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesChatSidebarChaptersAdd } from './add/main';
import { SpacesChatSidebarChapter } from './item/main';
import { SpacesChatSidebarChaptersProgress } from './progress/main';

export function SpacesChatSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <div
        style={{ height: 'calc(100% - 5rem)' }}
        className='flex w-full flex-col overflow-auto'
      >
        <GlassWindowFrame className='w-full flex-shrink-0'>
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
            {chapterListController.state.more.queryResults.map((chapter) => (
              <ContextForSpaceChapterObj.Provider
                value={chapter}
                key={chapter.id}
              >
                <SpacesChatSidebarChapter key={chapter.id} />
              </ContextForSpaceChapterObj.Provider>
            ))}
            <HorizontalDivider />
            <SpacesChatSidebarChaptersAdd />
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
      <SpacesChatSidebarChaptersProgress />
    </>
  );
}
