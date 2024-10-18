import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ContextForTaskObj, TaskStatus } from '@/(server)/model/task/main';
import { useContext } from 'react';

export function SpacesBoardLogTableItemStatus() {
  const task = useContext(ContextForTaskObj);
  const wayListController = useContext(ContextForTaskList);

  return (
    <div>
      <select
        className='text-light bg-transparent text-center text-sm font-bold text-slate-300 outline-none'
        value={task.taskStatus}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => {
          wayListController.actions.editActions.edit(task.id, {
            taskStatus: e.target.value,
          });
        }}
      >
        <option>{TaskStatus.TODO}</option>
        <option>{TaskStatus.IN_PROGRESS}</option>
        <option>{TaskStatus.REVIEW}</option>
        <option>{TaskStatus.DONE}</option>
      </select>
    </div>
  );
}
