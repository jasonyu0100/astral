import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskList } from '@/architecture/controller/task/list';
import { TaskStatus } from '@/architecture/model/task/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralTableIcon } from '@/icons/table/main';
import { useControllerForTogglable } from '@/logic/contexts/togglable/main';
import { useContext } from 'react';

export function PublicSpacesTasksSectionTodo() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskList);
  const tasks = taskListController.state.objs;
  const pending = tasks.filter(
    (task) => task.taskStatus === TaskStatus.PENDING,
  );
  const togglableController = useControllerForTogglable(false);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div
        className='flex w-full animate-pulse cursor-pointer flex-row items-center justify-between space-x-[1rem]'
        onClick={() => togglableController.toggle()}
      >
        <div className='flex flex-row items-center space-x-[1rem]'>
          <p className='text-lg font-bold text-slate-300'>
            {TaskStatus.PENDING}
          </p>
        </div>
        <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 flex-col items-center justify-center rounded-full bg-red-500'>
          <p className='text-md font-bold text-white'>{pending.length}</p>
        </div>
      </div>
      <HorizontalDivider />
      {togglableController.toggled && (
        <div className='flex w-full flex-shrink-0 flex-col space-y-[1rem] py-[1rem]'>
          {pending.length === 0 && (
            <p className='text-slate-300'>No tasks in to do</p>
          )}
          {pending.map((task) => (
            <div className='aspect-[3/2] w-full rounded border-[1px] border-black bg-yellow-500 p-[1rem] font-bold'>
              <div className='flex flex-row justify-between space-x-[1rem]'>
                <p className='text-xl font-bold'>{task.title}</p>
                <AstralTableIcon
                  onClick={() => {
                    window.location.href = `${spacesMap.spaces.id.objective.link(
                      spaceMainController.state.objId,
                    )}?chapter=${chapterListController.state.objId}`;
                  }}
                />
              </div>
              <p className='text-sm font-light'>{task.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
