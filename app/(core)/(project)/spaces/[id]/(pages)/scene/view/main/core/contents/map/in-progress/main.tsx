import { ContextForTaskList } from '@/server/controller/way/list';
import { TaskStatus } from '@/server/model/task/main';
import { useContext } from 'react';

export function SpacesSceneInProgress() {
  const taskListController = useContext(ContextForTaskList);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.IN_PROGRESS,
  );
  const inProgressTask = inProgress.at(0);

  return (
    <div className='absolute right-[1rem] top-[1rem] z-10 flex h-[200px] flex-shrink-0 flex-col items-center justify-center'>
      {inProgressTask ? (
        <div className='h-[200px] w-[250px] overflow-auto rounded-lg border-[1px] border-slate-300 bg-yellow-500 p-[1rem]'>
          <div className='flex flex-col'>
            <div className='flex w-full flex-row justify-between space-x-[1rem]'>
              <p className='text-lg font-bold'>{inProgressTask.title}</p>
              <div className='flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-full bg-red-500'>
                <p className='text-md font-bold text-slate-300'>
                  {inProgress.length}
                </p>
              </div>
            </div>
            <p className='text-sm font-light'>{inProgressTask.description}</p>
          </div>
        </div>
      ) : (
        <div className='h-[200px] w-[250px] overflow-auto rounded-lg border-[1px] border-slate-300 bg-yellow-500 p-[1rem]'>
          <p className='text-lg font-bold'>No task in-progress</p>
        </div>
      )}
    </div>
  );
}
