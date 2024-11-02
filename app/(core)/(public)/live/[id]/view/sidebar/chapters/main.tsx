import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { PublicSpaceidebarItem } from '../item/main';

export function PublicSpaceSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      className='w-[400px] flex-shrink-0 p-[1rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem]'>
        <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
          <p className='text-2xl font-bold text-slate-300'>Chapters</p>
        </div>
        <HorizontalDivider />
        {chapterListController.state.objs.map((chapter) => (
          <ContextForSpaceChapterObj.Provider value={chapter}>
            <PublicSpaceidebarItem />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
