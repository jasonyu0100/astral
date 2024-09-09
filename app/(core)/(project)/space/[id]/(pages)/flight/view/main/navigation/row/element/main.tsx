import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpaceFlightRowElement() {
  const index = useContext(ContextForIndexable);
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active = chapter.id === chapterListController.state.objId;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='z-10'>
          <GlassWindowFrame
            className={cn('z-10 h-[3.5rem] max-w-[300px]', {
              'animate-pulse-slow bg-gradient-to-br from-blue-600 to-cyan-400':
                active,
            })}
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className='z-10 flex h-full w-full items-center px-[1rem]'
              onClick={() =>
                chapterListController.actions.stateActions.select(chapter)
              }
            >
              <p
                className={`w-full whitespace-nowrap font-bold ${active ? 'text-slate-300' : 'text-slate-500'}`}
              >
                {index + 1}. {chapter.title}
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
}
