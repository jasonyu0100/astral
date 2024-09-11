import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesFlightSidebarItem() {
  const spotlight = useContext(ContextForChapterSpotlightObj);
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );
  const selected =
    spotlightListController.actions.stateActions.checkActive(spotlight);

  return (
    <GlassWindowFrame
      className='flex h-[5rem] w-full p-[1rem]'
      roundedFx={roundedFx['rounded-full']}
      borderFx={selected ? borderFx['border-around'] : ''}
    >
      <GlassWindowContents
        onClick={() =>
          spotlightListController.actions.stateActions.select(spotlight)
        }
        className='flex h-full w-full flex-row items-center space-x-[1rem]'
      >
        <img
          src={exampleFileElem.src}
          className='aspect-square h-[3rem] w-[3rem] flex-shrink-0 rounded-full'
        />
        <p
          className={cn('text-sm font-bold text-slate-500', {
            'text-slate-300': selected,
          })}
        >
          {spotlight.title}
        </p>
      </GlassWindowContents>
      {selected ? (
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      ) : (
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      )}
    </GlassWindowFrame>
  );
}
