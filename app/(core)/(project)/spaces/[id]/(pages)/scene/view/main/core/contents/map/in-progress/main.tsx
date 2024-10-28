import { ContextForTaskList } from '@/server/controller/way/list';
import { TaskStatus } from '@/server/model/task/main';
import { useContext } from 'react';

export function SpacesSceneInProgress() {
  const taskListController = useContext(ContextForTaskList);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.IN_PROGRESS,
  );

  return (
    <div className='absolute right-[1rem] top-[1rem] z-10 flex h-[200px] flex-shrink-0 flex-col items-center justify-center'>
      {inProgress.slice(0, 1).map((task) => (
        <div className='h-[200px] min-w-[200px] max-w-[250px] overflow-auto rounded-lg bg-yellow-500 p-[1rem]'>
          <div className='flex flex-col'>
            <div className='flex w-full flex-row justify-between space-x-[1rem]'>
              <p className='text-lg font-bold'>{task.title}</p>
              <div className='flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-full bg-red-500'>
                <p className='text-md font-bold text-slate-300'>
                  {inProgress.length}
                </p>
              </div>
            </div>
            <p className='text-sm font-light'>{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
