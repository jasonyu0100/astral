import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForTaskList } from '@/server/controller/way/list';
import { TaskStatus } from '@/server/model/task/main';
import { useContext } from 'react';

export function SpacesSceneInProgress() {
  const taskListController = useContext(ContextForTaskList);
  const spaceMainController = useContext(ContextForSpaceMain);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.IN_PROGRESS,
  );
  const todo = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.TODO,
  );
  const inProgressTask = inProgress.at(0);

  return (
    <div className='absolute right-[1rem] top-[1rem] z-10 flex h-[200px] flex-shrink-0 flex-col items-center justify-center'>
      {inProgressTask ? (
        <div className='h-[200px] w-[250px] flex-shrink-0 overflow-auto rounded-lg border-[1px] border-slate-300 bg-yellow-500 p-[1rem]'>
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
        <div className='h-[200px] w-[250px] flex-shrink-0 overflow-auto rounded-lg border-[1px] border-slate-300 bg-yellow-500 p-[1rem]'>
          <div className='flex flex-row justify-between space-x-[1rem]'>
            <p className='text-lg font-bold'>
              {todo.length > 0 ? 'No task in-progress' : 'No available tasks'}
            </p>
            <div
              className='flex h-[2rem] w-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
              onClick={() => {
                window.location.href = `${spacesMap.spaces.id.progress.link(
                  spaceMainController.state.objId,
                )}?chapter=${chapterListController.state.objId}`;
              }}
            >
              <AstralBackIndicatorIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
