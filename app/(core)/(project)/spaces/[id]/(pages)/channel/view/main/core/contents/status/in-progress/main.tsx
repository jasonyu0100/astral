import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskList } from '@/architecture/controller/task/list';
import { TaskStatus } from '@/architecture/model/task/main';
import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { AstralCheckIcon } from '@/icons/check/main';
import React, { useContext } from 'react';

export function SpacesChannelStatusInProgress() {
  const taskListController = useContext(ContextForTaskList);
  const inProgress = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.CURRENT,
  );
  const todo = taskListController.state.objs.filter(
    (obj) => obj.taskStatus === TaskStatus.PENDING,
  );
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const [index, setIndex] = React.useState(0);
  const currentTask = inProgress.at(index);

  return (
    <div className='h-[5rem]'>
      {currentTask ? (
        <div className='flex h-[200px] w-[250px] flex-shrink-0 flex-col justify-between overflow-auto rounded-lg border-[3px] border-red-500 bg-yellow-500 p-[1rem]'>
          <div className='flex flex-col'>
            <div className='flex w-full flex-row justify-between space-x-[1rem]'>
              <p className='text-lg font-bold'>{currentTask?.title}</p>
              <div className='flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                <AstralCheckIcon
                  onClick={() =>
                    taskListController.actions.editActions.edit(
                      currentTask.id,
                      {
                        taskStatus: TaskStatus.DONE,
                      },
                    )
                  }
                />
              </div>
            </div>
            <p className='text-sm font-light'>{currentTask?.description}</p>
          </div>
          <div className='flex w-full flex-row justify-between'>
            <AstralArrowBackIcon
              className='fill-black'
              onClick={() => {
                if (index - 1 >= 0) {
                  const previousTask = inProgress.at(index - 1);
                  if (previousTask) {
                    taskListController.actions.stateActions.select(
                      previousTask,
                    );
                    setIndex(index - 1);
                  }
                }
              }}
            />
            <p className='font-bold'>
              {index + 1} of {inProgress.length}
            </p>
            <AstralArrowForwardIcon
              className='fill-black'
              onClick={() => {
                if (index + 1 <= inProgress.length) {
                  const nextTask = inProgress.at(index + 1);
                  if (nextTask) {
                    taskListController.actions.stateActions.select(nextTask);
                    setIndex(index + 1);
                  }
                }
              }}
            />
          </div>
        </div>
      ) : (
        <div className='h-[200px] w-[250px] flex-shrink-0 overflow-auto rounded-lg border-[3px] border-red-500 bg-yellow-500 p-[1rem]'>
          <div className='flex flex-row justify-between space-x-[1rem]'>
            <p className='text-lg font-bold'>
              {todo.length > 0
                ? 'No task in-progress'
                : 'No current objectives'}
            </p>
            <div
              className='flex h-[2rem] w-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
              onClick={() => {
                window.location.href = `${spacesMap.spaces.id.mission.link(
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
