import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesChatSidebarChaptersAdd } from './list/add/main';
import { SpacesChatSidebarChapter } from './list/chapter/main';

export function SpacesChatSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassWindowFrame className='h-full w-full'>
        <GlassWindowContents className='flex flex-col space-y-[1rem] p-[1rem]'>
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
  );
}
