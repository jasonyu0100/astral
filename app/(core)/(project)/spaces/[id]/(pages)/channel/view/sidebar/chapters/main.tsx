import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesChannelSidebarChaptersAdd } from './add/main';
import { SpacesChannelSidebarChapter } from './item/main';
import { SpacesChannelSidebarChaptersProgress } from './progress/main';

export function SpacesChannelSidebarChapters() {
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
                <SpacesChannelSidebarChapter key={chapter.id} />
              </ContextForSpaceChapterObj.Provider>
            ))}
            <HorizontalDivider />
            <SpacesChannelSidebarChaptersAdd />
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
      <SpacesChannelSidebarChaptersProgress />
    </>
  );
}
