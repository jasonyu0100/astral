import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskList } from '@/architecture/controller/task/list';
import { TaskStatus } from '@/architecture/model/task/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralArrowDropDown } from '@/icons/arrow-drop-down/main';
import { AstralArrowDropUp } from '@/icons/arrow-drop-up/main';
import { AstralEditIcon } from '@/icons/edit/main';
import { useControllerForTogglable } from '@/logic/contexts/togglable/main';
import { useContext } from 'react';

export function PublicSpacesTasksSectionTodo() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const taskListController = useContext(ContextForTaskList);
  const tasks = taskListController.state.objs;
  const pending = tasks.filter(
    (task) => task.taskStatus === TaskStatus.PENDING,
  );
  const togglableController = useControllerForTogglable(true);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div
        className='flex w-full animate-pulse cursor-pointer flex-row items-center justify-between space-x-[1rem]'
        onClick={() => togglableController.toggle()}
      >
        <p className='text-2xl font-bold text-slate-300'>
          {TaskStatus.PENDING}
        </p>
        {togglableController.toggled ? (
          <AstralArrowDropUp />
        ) : (
          <AstralArrowDropDown />
        )}
      </div>
      <HorizontalDivider />
      {togglableController.toggled && (
        <div className='flex w-full flex-shrink-0 flex-col space-y-[1rem] py-[1rem]'>
          {pending.length === 0 && (
            <p className='text-slate-300'>No tasks in to do</p>
          )}
          {pending.map((task) => (
            <div className='aspect-[3/2] w-full rounded border-[1px] border-slate-300 bg-yellow-500 p-[1rem] font-bold'>
              <div className='flex flex-row justify-between space-x-[1rem]'>
                <p className='text-xl font-bold'>{task.title}</p>
                <AstralEditIcon
                  onClick={() => {
                    window.location.href = spacesMap.spaces.id.progress.link(
                      spaceMainController.state.objId,
                    );
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
