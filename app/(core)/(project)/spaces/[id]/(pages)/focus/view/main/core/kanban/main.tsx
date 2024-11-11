import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { TaskStatus } from '@/architecture/model/task/main';
import { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SpaceFocusKanbanRow } from './row/main';

export const ItemType = {
  TASK: 'task',
};

export function SpacesFocusKanban() {
  const taskListController = useContext(ContextForTaskListFromChapter);
  const { objs: objs } = taskListController.state;

  const todos = objs.filter((task) => task.taskStatus === TaskStatus.UPCOMING);
  const inprogress = objs.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const dones = objs.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{ width: '100%', height: 'calc(100%)' }}
        className='overflow-auto'
      >
        <div className='grid h-full w-full grid-rows-3 space-y-[1rem] p-[1rem]'>
          <SpaceFocusKanbanRow
            title={TaskStatus.UPCOMING}
            tasks={todos}
            status={TaskStatus.UPCOMING}
          />
          <SpaceFocusKanbanRow
            title={TaskStatus.CURRENT}
            tasks={inprogress}
            status={TaskStatus.CURRENT}
          />
          <SpaceFocusKanbanRow
            title={TaskStatus.DONE}
            tasks={dones}
            status={TaskStatus.DONE}
          />
        </div>
      </div>
    </DndProvider>
  );
}
