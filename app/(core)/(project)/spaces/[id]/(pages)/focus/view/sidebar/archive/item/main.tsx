import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { ContextForTaskObj, TaskStatus } from '@/architecture/model/task/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';

export function SpacesWorkBacklogItem() {
  const task = useContext(ContextForTaskObj);
  const taskListController = useContext(ContextForTaskListFromChapter);

  return (
    <div className='aspect-[3/2] w-full cursor-pointer space-y-[1rem] rounded border-[1px] border-slate-300 bg-yellow-500 p-[1rem]'>
      <div className='flex flex-row justify-between space-x-[1rem]'>
        <p className='text-xl font-bold text-black'>{task.title}</p>
        <button
          onClick={() => {
            taskListController.actions.editActions.edit(task.id, {
              taskStatus: TaskStatus.UPCOMING,
            });
          }}
          className='ml-[1rem]'
        >
          <AstralArrowForwardIcon className='fill-slate-300' />
        </button>
      </div>
      <p className='text-md text-black'>{task.description}</p>
    </div>
  );
}
