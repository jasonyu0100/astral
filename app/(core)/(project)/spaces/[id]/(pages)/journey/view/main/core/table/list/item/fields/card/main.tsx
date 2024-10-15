import { ContextForSpacesJourney } from '@/(core)/(project)/spaces/[id]/(pages)/journey/controller/main';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ContextForTaskObj } from '@/(server)/model/task/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesJourneyLogTableItemCard() {
  const task = useContext(ContextForTaskObj);
  const journeyController = useContext(ContextForSpacesJourney);
  const selected = journeyController.state.selectedLogs.includes(task);
  const taskListController = useContext(ContextForTaskList);

  return (
    <GlassWindowFrame className='col-span-3 aspect-video w-full overflow-auto bg-yellow-500 p-[1rem]'>
      <GlassWindowContents className='h-full w-full cursor-pointer flex-col space-y-[0.5rem] overflow-auto pr-[1rem]'>
        <p className='w-full text-sm font-light '>
          {getFormattedAMPM(new Date(task.created))},{' '}
          {getFormattedDate(new Date(task.created))}
        </p>
        <br />
        <input
          className='w-full bg-transparent text-xl font-bold outline-none placeholder:text-slate-800'
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
          className='font-md w-full bg-transparent text-lg outline-none placeholder:text-slate-800'
          onBlur={(e) =>
            taskListController.actions.editActions.edit(task.id, {
              description: e.target.value,
            })
          }
        />
      </GlassWindowContents>
      {selected ? (
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      ) : (
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      )}
    </GlassWindowFrame>
  );
}
