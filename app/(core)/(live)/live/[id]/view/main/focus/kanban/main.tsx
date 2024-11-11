import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { TaskStatus } from '@/architecture/model/task/main';
import { useContext } from 'react';
import { PublicSpaceKanbanRow } from './row/main';

const ItemType = {
  TASK: 'task',
};

export function PublicSpaceKanban() {
  const taskListController = useContext(ContextForTaskListFromChapter);
  const { objs: objs } = taskListController.state;

  const todos = objs.filter((task) => task.taskStatus === TaskStatus.UPCOMING);
  const inprogress = objs.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const dones = objs.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <div
      style={{ width: '100%', height: 'calc(100%)' }}
      className='overflow-auto'
    >
      <div className='grid h-full w-full grid-rows-3 space-y-[1rem] py-[1rem]'>
        <PublicSpaceKanbanRow
          title={TaskStatus.UPCOMING}
          tasks={todos}
          status={TaskStatus.UPCOMING}
        />
        <PublicSpaceKanbanRow
          title={TaskStatus.CURRENT}
          tasks={inprogress}
          status={TaskStatus.CURRENT}
        />
        <PublicSpaceKanbanRow
          title={TaskStatus.DONE}
          tasks={dones}
          status={TaskStatus.DONE}
        />
      </div>
    </div>
  );
}
