import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  ContextForTaskListFromChapter,
  calculateCompletionColor,
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
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesChannelModals } from '../../../../../modal/controller/main';

export function SpacesChannelSidebarChapter() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapterObj);
  const spacesChannelModalController = useContext(
    ContextForSpacesChannelModals,
  );
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
    <>
      {active ? (
        <GlassWindowFrame
          className='aspect-16/9 w-full flex-shrink-0 cursor-pointer'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
            <div
              className='flex w-full flex-col space-y-[1rem]'
              onClick={() =>
                chapterListController.actions.stateActions.select(chapterObj)
              }
            >
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
                    spacesChannelModalController.editChapterController.open()
                  }
                />
              </div>
              <p className='font-md w-full text-sm font-light text-slate-300'>
                {chapterListController.state.currentObj?.objective ||
                  'Open-ended'}
              </p>
              <p className='font-md w-full text-sm font-light text-slate-300'>
                {chapterListController.state.currentObj?.description ||
                  'Open-ended'}
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
            </div>
            <GlassWindowFrame
              className='w-full flex-shrink-0'
              roundedFx={roundedFx['rounded-full']}
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents
                onClick={() => {
                  window.location.href = spacesMap.spaces.id.work.link(
                    spaceMainController.state.objId,
                  );
                }}
                className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem] p-[0.5rem]'
              >
                <div className='relative h-[1rem] w-full overflow-hidden rounded-full bg-blue-500'>
                  <div
                    className='absolute left-0 top-0 h-full bg-blue-500'
                    style={{
                      width: `${(pending.length / (pending.length + current.length + done.length)) * 100}%`,
                    }}
                  ></div>
                  <div
                    className='absolute top-0 h-full bg-yellow-500'
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
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx['rounded']}
          className='flex-shrink-0 p-[1rem]'
        >
          <GlassWindowContents
            className='w-full cursor-pointer'
            onClick={() =>
              chapterListController.actions.stateActions.select(chapterObj)
            }
          >
            <p className={ctwn('text-lg font-bold text-slate-300')}>
              {chapterObj.title?.trim() || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </>
  );
}
