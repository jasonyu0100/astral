import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import { SpacesSpaceChapterActive } from './active/main';

export function SpacesSpaceSidebarChapter() {
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
            <SpacesSpaceChapterActive />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          borderFx={borderFx['border-b']}
          className='overflow-hidden p-[0.5rem]'
        >
          <GlassWindowContents
            className='w-full cursor-pointer'
            onClick={() =>
              chapterListController.actions.stateActions.select(chapter)
            }
          >
            <p
              className={cn(
                'whitespace-nowrap font-extraBold text-xl text-slate-400',
              )}
            >
              {chapter.title?.trim() || 'Untitled'}
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
      )}
    </>
  );
}
