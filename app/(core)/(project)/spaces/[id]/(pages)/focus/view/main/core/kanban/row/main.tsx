import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { ContextForSpacesFocusModals } from '../../../../../modal/controller/main';
import { ItemType } from '../main';
import { SpaceFocusKanbanTask } from '../task/main';

export function SpaceFocusKanbanRow({ title, tasks, status }) {
  const taskListController = useContext(ContextForTaskListFromChapter);
  const taskModalsController = useContext(ContextForSpacesFocusModals);

  const [{ isOver }, drop] = useDrop({
    accept: ItemType.TASK,
    drop: (item) => {
      if (item.status !== status) {
        taskListController.actions.editActions.edit(item.id, {
          taskStatus: status,
        });
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className='flex flex-col overflow-auto border-b-[1px] border-slate-300 border-opacity-30'>
      <div className='flex flex-row items-center space-x-[1rem] pb-[1rem]'>
        <GlassWindowFrame
          roundedFx={roundedFx['rounded-full']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex flex-row items-center space-x-[1rem] px-[1rem] py-[0.5rem]'>
            <h2 className='text-lg font-semibold text-slate-300'>{title}</h2>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
      <div
        ref={drop}
        className={`flex h-full cursor-pointer flex-row space-x-[1rem] overflow-auto rounded pb-[1rem] ${isOver ? 'bg-blue-200 bg-opacity-30' : ''}`}
        onDoubleClick={() => {
          taskModalsController.addTaskController.open();
        }}
      >
        {tasks.map((task) => (
          <SpaceFocusKanbanTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
