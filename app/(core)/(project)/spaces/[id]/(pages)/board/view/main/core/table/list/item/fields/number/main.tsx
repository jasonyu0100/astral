import { ContextForSpacesBoard } from '@/(core)/(project)/spaces/[id]/(pages)/board/controller/main';
import { ContextForTaskObj } from '@/(server)/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesBoardLogTableItemNumber() {
  const index = useContext(ContextForIndexable);
  const log = useContext(ContextForTaskObj);
  const {
    state: { selectedTasks: selectedLogs },
    actions: {
      checkContainsSelectedTask: checkContainsSelectedLog,
      updateSelectedTasks: updateSelectedLogs,
    },
  } = useContext(ContextForSpacesBoard);
  const selected = checkContainsSelectedLog(log);

  return (
    <div>
      <GlassWindowFrame
        className='h-[3rem] w-[3rem] cursor-pointer'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={ctwn('flex items-center justify-center', {
            'bg-blue-500': selected,
          })}
          onClick={() => {
            if (selected) {
              updateSelectedLogs(
                selectedLogs.filter((selectedLog) => selectedLog.id !== log.id),
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
