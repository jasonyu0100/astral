import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/projects/view/sidebar/(common)/list/option/main';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  calculateCompletionColor,
  ContextForTaskListFromChapter,
} from '@/architecture/controller/task/list-from-chapter';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesWorkModals } from '../../../../modal/controller/main';

export function SpacesWorkSidebarChaptersChapter() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const spacesWorkModalsController = useContext(ContextForSpacesWorkModals);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useContext(ContextForTaskListFromChapter);
  const tasks = taskListController.state.objs;
  const pending = tasks.filter(
    (task) => task.taskStatus === TaskStatus.PENDING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
  const completionColor = calculateCompletionColor(taskListController);

  return (
    <div
      className='w-full cursor-pointer'
      onClick={() =>
        chapterListController.actions.stateActions.select(chapterObj)
      }
    >
      {selected ? (
        <GlassWindowFrame
          name={ExplorerProjectsSidebarOption.name}
          borderFx={borderFx['border-all']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents className='flex flex-col space-y-[0.5rem]'>
            <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
              <div className='flex flex-row items-center space-x-[1rem]'>
                <div
                  className={`h-[1rem] w-[1rem] animate-pulse rounded-full ${completionColor} flex-shrink-0`}
                ></div>
                <p
                  className={
                    'flex-grow animate-pulse-slow font-extraBold text-xl text-slate-300'
                  }
                >
                  {chapterObj.title?.trim() || 'Untitled'}
                </p>
              </div>
              <AstralMoreVertIcon
                onClick={() =>
                  spacesWorkModalsController.editChapterController.open()
                }
              />
            </div>
            <p className={'text-sm font-light text-slate-300'}>
              {chapterObj?.objective || 'No objective'}
            </p>
            <p className={'text-sm font-light text-slate-300'}>
              {chapterObj?.description || 'No summary'}
            </p>
            <HorizontalDivider />
            {current.length > 0 ? (
              <div className='flex w-full flex-col space-y-[1rem]'>
                {current.map((task, index) => (
                  <div
                    className='space-y-[0.5rem]text-black flex w-full flex-col items-center'
                    key={task.id}
                  >
                    <p className='font-md w-full text-lg font-bold text-slate-300'>
                      {index + 1}. {task.title}
                    </p>
                    <p className='font-md w-full text-sm font-light text-slate-300'>
                      {task.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className='flex flex-row items-center justify-between'>
                <p className='font-md w-full text-sm font-light text-slate-300'>
                  No tasks
                </p>
                <AstralBackIndicatorIcon
                  onClick={() => {
                    window.location.href = `${spacesMap.spaces.id.work.link(
                      spaceMainController.state.objId,
                    )}?chapter=${chapterListController.state.objId}`;
                  }}
                />
              </div>
            )}
            <GlassWindowFrame
              className='w-full flex-shrink-0'
              roundedFx={roundedFx['rounded-full']}
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents
                onClick={() => {
                  window.location.href = `${spacesMap.spaces.id.work.link(
                    spaceMainController.state.objId,
                  )}?chapter=${chapterListController.state.objId}`;
                }}
                className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem] p-[0.5rem]'
              >
                <div className='relative h-[1rem] w-full overflow-hidden rounded-full bg-blue-500'>
                  <div
                    className='absolute left-0 top-0 h-full bg-purple-500 '
                    style={{
                      width: `${(pending.length / (pending.length + current.length + done.length)) * 100}%`,
                    }}
                  ></div>
                  <div
                    className='absolute top-0 h-full bg-yellow-500 '
                    style={{
                      left: `${(pending.length / (pending.length + current.length + done.length)) * 100}%`,
                      width: `${(current.length / (pending.length + current.length + done.length)) * 100}%`,
                    }}
                  ></div>
                  <div
                    className='absolute top-0 h-full bg-green-500'
                    style={{
                      left: `${((pending.length + current.length) / (pending.length + current.length + done.length)) * 100}%`,
                      width: `${(done.length / (pending.length + current.length + done.length)) * 100}%`,
                    }}
                  ></div>
                </div>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          name={ExplorerProjectsSidebarOption.name}
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents>
            <p
              className={
                'flex-grow animate-pulse-slow font-extraBold text-xl text-slate-300'
              }
            >
              {chapterObj.title?.trim() || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </div>
  );
}
