import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/projects/view/sidebar/(common)/list/option/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForTaskList } from '@/server/controller/way/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { ChapterTaskStatus, TaskStatus } from '@/server/model/task/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesProgressModals } from '../../../../modal/controller/main';

export function SpacesProgressSidebarChaptersChapter() {
  const spacesProgressModalsController = useContext(
    ContextForSpacesProgressModals,
  );
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useContext(ContextForTaskList);
  const tasks = taskListController.state.objs;
  const todo = taskListController.state.objs.filter(
    (task) => task.taskStatus === TaskStatus.TODO,
  );
  const inprogress = taskListController.state.objs.filter(
    (task) => task.taskStatus === TaskStatus.IN_PROGRESS,
  );
  const done = taskListController.state.objs.filter(
    (task) => task.taskStatus === TaskStatus.DONE,
  );

  const completionColor = calculateCompletionColor();
  console.log(completionColor, todo.length, done.length, inprogress.length);

  function calculateCompletionColor() {
    function calculateCompletion() {
      if (tasks.length === done.length) {
        return ChapterTaskStatus.COMPLETE; // All tasks are done
      } else if (tasks.length === 0) {
        return ChapterTaskStatus.EMPTY; // No tasks
      } else if (inprogress.length > 0) {
        return ChapterTaskStatus.IN_PROGRESS; // In progress
      } else if (inprogress.length === 0 && done.length > 0) {
        return ChapterTaskStatus.WAITING;
      } else if (inprogress.length === 0 && done.length === 0) {
        return ChapterTaskStatus.TODO;
      } else if (todo.length >= 0) {
        return ChapterTaskStatus.TODO;
      }
      return ChapterTaskStatus.EMPTY;
    }
    const chapterTaskStatus = calculateCompletion();
    switch (chapterTaskStatus) {
      case ChapterTaskStatus.COMPLETE:
        return 'bg-green-500';
      case ChapterTaskStatus.IN_PROGRESS:
        return 'bg-yellow-500';
      case ChapterTaskStatus.TODO:
        return 'bg-red-500';
      case ChapterTaskStatus.WAITING:
        return 'bg-blue-500';
      case ChapterTaskStatus.EMPTY:
        return 'bg-slate-500'; // No tasks at all
      default:
        return 'bg-red-500';
    }
  }

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
                  spacesProgressModalsController.editChapterController.open()
                }
              />
            </div>
            <p className={'text-sm font-light text-slate-300'}>
              {chapterObj?.objective || 'No objective'}
            </p>
            <p className={'text-sm font-light text-slate-300'}>
              {chapterObj?.description || 'No summary'}
            </p>
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
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </div>
  );
}
