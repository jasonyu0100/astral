import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { useContext } from 'react';
import { SpacesPreviewSidebarChaptersAdd } from './add/main';
import { SpacesPreviewSidebarChaptersChapter } from './item/main';

export function SpacesPreviewSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div
      className='flex w-full flex-col overflow-auto'
      style={{ height: '100%' }}
    >
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider value={chapter}>
              <SpacesPreviewSidebarChaptersChapter />
            </ContextForSpaceChapterObj.Provider>
          ))}
          <HorizontalDivider />
          <SpacesPreviewSidebarChaptersAdd />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
