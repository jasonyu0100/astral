import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesChatSidebarChaptersAdd } from './add/main';
import { SpacesChatSidebarChapter } from './item/main';

export function SpacesChatSidebarChaptersList() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      {chapterListController.state.more.queryResults.map((chapter) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <SpacesChatSidebarChapter key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesChatSidebarChaptersAdd />
    </div>
  );
}
