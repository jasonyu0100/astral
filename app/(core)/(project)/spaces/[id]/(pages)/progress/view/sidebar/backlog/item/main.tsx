import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForTaskList } from '@/server/controller/task/list';
import { ContextForTaskObj, TaskStatus } from '@/server/model/task/main';
import { useContext } from 'react';

export function SpacesProgressBacklogItem() {
  const task = useContext(ContextForTaskObj);
  const taskListController = useContext(ContextForTaskList);

  return (
    <div className='aspect-square w-full cursor-pointer rounded border-[1px] border-slate-300 bg-yellow-500 p-[2rem]'>
      <div className='flex flex-row justify-between space-x-[1rem]'>
        <p className='text-lg font-bold'>{task.title}</p>
        <button
          onClick={() => {
            taskListController.actions.editActions.edit(task.id, {
              taskStatus: TaskStatus.TODO,
            });
          }}
          className='ml-[1rem]'
        >
          <AstralArrowForwardIcon className='fill-slate-300' />
        </button>
      </div>
      <p className='text-sm font-light'>{task.description}</p>
    </div>
  );
}
