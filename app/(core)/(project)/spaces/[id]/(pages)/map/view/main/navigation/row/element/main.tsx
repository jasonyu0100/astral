import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapDirectoryMode,
} from '../../../../../controller/main';

export function SpacesMapRowElement() {
  const index = useContext(ContextForIndexable);
  const chapter = useContext(ContextForSpaceChapterObj);
  const mapController = useContext(ContextForSpacesMap);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const active = chapter.id === chapterListController.state.objId;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='z-10'>
          <GlassWindowFrame
            className={cn('z-10 h-[3.5rem] max-w-[300px]', {
              'animate-pulse-slow': active,
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
            {!active ? (
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            ) : (
              <GlassWindowPane glassFx={glassFx['glass-20']} />
            )}
          </GlassWindowFrame>
        </TooltipTrigger>
        {active && (
          <TooltipContent className='z-20 py-[2rem]'>
            <GlassWindowFrame className='max-w-[300px]'>
              <GlassWindowContents
                className='flex h-full w-full flex-col space-y-[1rem]'
                onClick={() => {
                  chapterListController.actions.stateActions.select(chapter);
                  mapController.actions.updateDirectoryMode(
                    SpacesMapDirectoryMode.DEFAULT,
                  );
                }}
              >
                {sceneListController.state.objs.slice(0, 5).map((scene) => (
                  <GlassWindowFrame
                    className='h-[3.5rem] w-full px-[0.5rem]'
                    roundedFx={roundedFx['rounded-full']}
                  >
                    <GlassWindowContents
                      className='flex h-full w-full cursor-pointer items-center'
                      onClick={() =>
                        sceneListController.actions.stateActions.select(scene)
                      }
                    >
                      <p className='text-center font-bold text-slate-300'>
                        {scene.title}
                      </p>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                ))}
              </GlassWindowContents>
            </GlassWindowFrame>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
