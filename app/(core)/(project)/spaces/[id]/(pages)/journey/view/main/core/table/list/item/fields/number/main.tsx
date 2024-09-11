import { ContextForSpacesJourney } from '@/(core)/(project)/spaces/[id]/(pages)/journey/controller/main';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { cn } from '@/lib/utils';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpacesJourneyLogTableItemNumber() {
  const index = useContext(ContextForIndexable);
  const log = useContext(ContextForChapterLogObj);
  const {
    actions: { checkContainsSelectedLog },
  } = useContext(ContextForSpacesJourney);
  const selected = checkContainsSelectedLog(log);

  return (
    <div>
      <GlassWindowFrame
        className='h-[3rem] w-[3rem] cursor-pointer'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={cn('flex items-center justify-center', {
            'bg-blue-500': selected,
          })}
        >
          <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
