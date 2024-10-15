import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ContextForTaskObj } from '@/(server)/model/task/main';
import { glassFx } from '@/style/glass/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForSpacesJourney } from '../../../../../../controller/main';

export function SpaceJourneyListItem() {
  const journeyController = useContext(ContextForSpacesJourney);
  const taskListController = useContext(ContextForTaskList);
  const task = useContext(ContextForTaskObj);
  const selected = journeyController.state.selectedLogs.includes(task);

  return (
    <GlassWindowFrame className='aspect-video h-full bg-yellow-500 p-[0.5rem]'>
      <GlassWindowContents
        className={ctwn(
          'flex h-full w-full cursor-pointer flex-col space-y-[0.5rem] overflow-auto',
        )}
        onClick={() => {
          if (journeyController.state.selectedLogs.includes(task)) {
            journeyController.actions.updateSelectedLogs(
              journeyController.state.selectedLogs.filter(
                (selectedLog) => selectedLog !== task,
              ),
            );
          } else {
            taskListController.actions.stateActions.select(task);
            journeyController.actions.updateSelectedLogs([
              ...journeyController.state.selectedLogs,
              task,
            ]);
          }
        }}
      >
        <p className='text-xs font-light '>
          {getFormattedDate(new Date(task.created))}
        </p>
        <input
          className='text-md w-full bg-transparent font-bold outline-none placeholder:text-slate-800'
          defaultValue={task.title?.trim() || 'Untitled'}
          onBlur={(e) =>
            taskListController.actions.editActions.edit(task.id, {
              title: e.target.value,
            })
          }
        />
        <textarea
          defaultValue={task.description || ''}
          placeholder='Enter text here...'
          className='font-sm w-full bg-transparent text-lg outline-none placeholder:text-slate-800'
          onBlur={(e) =>
            taskListController.actions.editActions.edit(task.id, {
              description: e.target.value,
            })
          }
        />
      </GlassWindowContents>
      {selected && <GlassWindowPane glassFx={glassFx['glass-30']} />}
    </GlassWindowFrame>
  );
}
