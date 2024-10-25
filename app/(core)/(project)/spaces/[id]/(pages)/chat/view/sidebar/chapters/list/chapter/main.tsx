import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { SpacesChatChapterActive } from './active/main';

export function SpacesChatSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <GlassWindowFrame
          className='aspect-16/9 w-full flex-shrink-0 cursor-pointer'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
            <SpacesChatChapterActive />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents
            className='w-full cursor-pointer'
            onClick={() =>
              chapterListController.actions.stateActions.select(chapter)
            }
          >
            <p className={ctwn('text-lg font-bold text-slate-300')}>
              {chapter.title?.trim() || 'Untitled'}
            </p>
            <p className='font-md w-full text-sm font-light text-slate-300'>
              <span className='font-bold'>Objective: </span>
              {chapter.objective || 'Open-ended'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </>
  );
}
