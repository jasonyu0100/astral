import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { PublicSpaceSidebarItem } from './item/main';

export function PublicSpaceSidebar() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='p-[2rem]'>
      <GlassWindowFrame
        className='h-full w-[350px] flex-shrink-0 p-[1rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] overflow-auto pr-[1rem]'>
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider value={chapter}>
              <PublicSpaceSidebarItem />
            </ContextForSpaceChapterObj.Provider>
          ))}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
