import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  calculateCompletionColor,
  useControllerForTaskList,
} from '@/architecture/controller/task/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../../controller/main';

export function PublicSpaceSidebarItem() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useControllerForTaskList(chapterObj.id);
  const currentTasks = taskListController.state.objs.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const completionColor = calculateCompletionColor(taskListController);

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
              PublicSpaceFeedView.POSTS,
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
              <div
                className={`flex h-[3rem] w-[3rem] flex-shrink-0 flex-row items-center justify-center rounded-full ${publicSpaceController.state.feedView === PublicSpaceFeedView.CHANNEL ? 'bg-emerald-500' : 'bg-slate-500'}`}
              >
                <AstralChatIndicatorIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    if (
                      publicSpaceController.state.feedView ===
                      PublicSpaceFeedView.CHANNEL
                    ) {
                      publicSpaceController.actions.updateFeedView(
                        PublicSpaceFeedView.POSTS,
                      );
                    } else {
                      publicSpaceController.actions.updateFeedView(
                        PublicSpaceFeedView.CHANNEL,
                      );
                    }
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
              <HorizontalDivider />
              {currentTasks.length > 0 ? (
                <div className='flex w-full flex-col space-y-[1rem]'>
                  {currentTasks.map((task, index) => (
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
                </div>
              )}
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
