import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForTaskList } from '@/server/controller/task/list';
import { TaskStatus } from '@/server/model/task/main';
import { useContext } from 'react';

export function SpacesChatStatusInProgress() {
  const taskListController = useContext(ContextForTaskList);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.IN_PROGRESS,
  );
  const todo = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.TODO,
  );
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='h-[5rem]'>
      {taskListController.state.currentObj ? (
        <div className='flex h-[200px] w-[250px] flex-shrink-0 flex-col justify-between overflow-auto rounded-lg border-[1px] border-slate-300 bg-yellow-500 p-[1rem]'>
          <div className='flex flex-col'>
            <div className='flex w-full flex-row justify-between space-x-[1rem]'>
              <p className='text-lg font-bold'>
                {taskListController.state.currentObj.title}
              </p>
              <div className='flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-full bg-red-500'>
                <p className='text-md font-bold text-slate-300'>
                  {inProgress.length}
                </p>
              </div>
            </div>
            <p className='text-sm font-light'>
              {taskListController.state.currentObj.description}
            </p>
          </div>
          <div className='flex w-full flex-row justify-between'>
            <AstralArrowBackIcon
              onClick={() => taskListController.actions.stateActions.goPrev()}
            />
            <p className='font-bold text-slate-300'>
              {taskListController.state.index + 1} of{' '}
              {taskListController.state.objs.length}
            </p>
            <AstralArrowForwardIcon
              onClick={() => taskListController.actions.stateActions.goNext()}
            />
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
