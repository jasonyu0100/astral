import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { PublicSpaceSidebarItem } from './item/main';

export function PublicSpaceSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0'>
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem]'>
        <HorizontalDivider />
        {chapterListController.state.objs.map((chapter) => (
          <ContextForSpaceChapterObj.Provider value={chapter}>
            <PublicSpaceSidebarItem />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
