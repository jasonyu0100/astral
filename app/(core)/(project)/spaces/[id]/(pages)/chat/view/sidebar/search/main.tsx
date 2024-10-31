import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesChatSidebarSearch() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex h-[4rem] w-full items-center justify-center p-[1rem] shadow-glow'>
      <GlassWindowFrame
        className='h-[2rem] w-full flex-shrink-0'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents className='h-full w-full'>
          <input
            className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
            placeholder='Search...'
            onChange={(e) => {
              {
                chapterListController.actions.stateActions.searchAndUpdateQuery(
                  e.target.value,
                );
              }
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
