import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralColumnsIcon } from '@/icons/columns/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useControllerForTaskList } from '@/server/controller/task/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { ChapterTaskStatus, TaskStatus } from '@/server/model/task/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../controller/main';

export function PublicSpaceidebarItem() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useControllerForTaskList(chapterObj.id);
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
    <>
      <GlassWindowFrame
        className='w-full flex-shrink-0'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          className={`flex cursor-pointer flex-col space-y-[1rem] p-[1rem]`}
          onClick={() => {
            chapterListController.actions.stateActions.select(chapterObj);
            publicSpaceController.actions.updateFeedView(
              PublicSpaceFeedView.CHAPTER,
            );
          }}
        >
          <div className='flex w-full justify-between space-x-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <div
                className={`h-[1rem] w-[1rem] animate-pulse rounded-full ${completionColor} flex-shrink-0`}
              ></div>
              <p className='text-xl font-bold text-slate-300'>
                {chapterObj.title}
              </p>
            </div>
            {selected && (
              <div className='flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-full bg-slate-500'>
                <AstralColumnsIcon
                  onClick={() => {
                    window.open(
                      `${spacesMap.spaces.id.progress.link(
                        spaceMainController.state.objId,
                      )}?chapter=${chapterObj.id}`,
                    );
                  }}
                />
              </div>
            )}
          </div>
          {selected && (
            <>
              <p className='text-sm font-light text-slate-300'>
                {chapterObj.objective}
              </p>
              <p className='text-sm font-light text-slate-300'>
                {chapterObj.description}
              </p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane
          glassFx={selected ? glassFx['glass-20'] : glassFx['glass-5']}
        />
      </GlassWindowFrame>
    </>
  );
}
