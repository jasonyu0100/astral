import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';
import { useContext } from 'react';

export function SpacesPublicSidebarChapterItemTasks() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskListFromChapter);
  const tasks = taskListController.state.objs;
  const upcoming = tasks.filter(
    (task) => task.taskStatus === TaskStatus.UPCOMING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <>
      <div className='flex flex-row justify-between'>
        <p className={'text-lg font-bold text-slate-300'}>Focus</p>
      </div>
      <HorizontalDivider />
      {current.length > 0 ? (
        <div className='flex w-full flex-col space-y-[0.5rem]'>
          {current.map((task, index) => (
            <div
              className='flex w-full flex-row items-center justify-between space-y-[0.5rem]'
              key={task.id}
            >
              <p className='font-md text-md w-full font-light text-slate-300'>
                {index + 1}. {task.title}
              </p>
              <AstralCheckIcon
                className='h-[2rem] w-[2rem]'
                onClick={() => {
                  taskListController.actions.editActions.edit(task.id, {
                    taskStatus: TaskStatus.DONE,
                  });
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-row items-center justify-between'>
          <p className='font-md w-full text-lg font-bold text-slate-300'>
            No tasks
          </p>
          <Link
            href={`${spacesMap.spaces.id.focus.link(
              spaceMainController.state.objId,
            )}?chapter=${chapterListController.state.objId}`}
          >
            <AstralBackIndicatorIcon />
          </Link>
        </div>
      )}
      <Link
        href={`${spacesMap.spaces.id.focus.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.objId}`}
      >
        <GlassWindowFrame
          className='w-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem]'>
            <div className='relative h-[1.5rem] w-full overflow-hidden rounded-full bg-blue-500'>
              <div
                className='absolute top-0 h-full bg-yellow-500 '
                style={{
                  left: `0px`,
                  width: `${(current.length / (current.length + done.length + upcoming.length)) * 100}%`,
                }}
              ></div>
              <div
                className='absolute top-0 h-full bg-green-500'
                style={{
                  left: `${(current.length / (current.length + done.length + upcoming.length)) * 100}%`,
                  width: `${(done.length / (upcoming.length + current.length + done.length)) * 100}%`,
                }}
              ></div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </Link>
    </>
  );
}
