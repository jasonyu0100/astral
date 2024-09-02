import { ContextForSpaceJourney } from '@/(core)/(project)/space/[id]/(pages)/journey/controller/main';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { cn } from '@/lib/utils';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceJourneyLogTableItemNumber() {
  const index = useContext(ContextForIndexable);
  const log = useContext(ContextForChapterLogObj);
  const {
    state: { selectedLogs },
    actions: { updateSelectedLogs, checkContainsSelectedLog },
  } = useContext(ContextForSpaceJourney);
  const selected = checkContainsSelectedLog(log);

  return (
    <div>
      <GlassWindowFrame
        className='h-[3rem] w-[3rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={cn('flex items-center justify-center', {
            'bg-blue-500': selected,
          })}
          onClick={() => {
            if (selected) {
              updateSelectedLogs(
                selectedLogs.filter((selectedLog) => {
                  return selectedLog.id !== log.id;
                }),
              );
            } else {
              updateSelectedLogs([...selectedLogs, log]);
            }
          }}
        >
          <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
