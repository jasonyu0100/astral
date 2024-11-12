import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  calculateCompletionColor,
  useControllerForTaskListFromChapter,
} from '@/architecture/controller/task/list-from-chapter';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBookmarkIcon } from '@/icons/bookmark/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { AstralTableIcon } from '@/icons/table/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../../controller/main';

export function PublicSpaceSidebarItem() {
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useControllerForTaskListFromChapter(chapterObj.id);

  return selected ? (
    <SelectedPublicSpaceSidebarItem />
  ) : (
    <DefaultPublicSpaceSidebarItem />
  );
}

function DefaultPublicSpaceSidebarItem() {
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const taskListController = useControllerForTaskListFromChapter(chapterObj.id);
  const completionColor = calculateCompletionColor(taskListController);

  return (
    <GlassWindowFrame
      className='w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        className='flex cursor-pointer flex-col space-y-[1rem] p-[1rem]'
        onClick={() => {
          chapterListController.actions.stateActions.select(chapterObj);
          if (
            publicSpaceController.state.feedView === PublicSpaceFeedView.POST
          ) {
            publicSpaceController.actions.updateFeedView(
              PublicSpaceFeedView.POSTS,
            );
          }
        }}
      >
        <div className='flex w-full justify-between space-x-[1rem]'>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>
              {chapterObj?.title || 'Untitled'}
            </p>
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}

function SelectedPublicSpaceSidebarItem() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useControllerForTaskListFromChapter(chapterObj.id);
  const tasks = taskListController.state.objs;
  const upcoming = tasks.filter(
    (task) => task.taskStatus === TaskStatus.UPCOMING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
  const completionColor = calculateCompletionColor(taskListController);

  return (
    <>
      <GlassWindowFrame
        className='w-full flex-shrink-0'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex flex-col space-y-[1rem] p-[1rem]'>
          <div className='flex w-full items-center justify-between space-x-[1rem]'>
            <p
              className='text-xl font-bold text-slate-300'
              onClick={() => {
                chapterListController.actions.stateActions.select(chapterObj);
                if (
                  publicSpaceController.state.feedView ===
                  PublicSpaceFeedView.POST
                ) {
                  publicSpaceController.actions.updateFeedView(
                    PublicSpaceFeedView.POSTS,
                  );
                }
              }}
            >
              {chapterObj?.title || 'Untitled'}
            </p>
          </div>
          <p className='text-sm font-light text-slate-300'>
            {chapterObj.objective}
          </p>
          <p className='text-sm font-light text-slate-300'>
            {chapterObj.description}
          </p>
          <HorizontalDivider />
          <Link
            href={spacesMap.spaces.id.focus.link(
              spaceMainController.state.objId,
            )}
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
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      </GlassWindowFrame>
      <div className='mt-[1rem] flex w-full items-center justify-center space-x-[1rem]'>
        <div
          className={`flex h-[3rem] w-[3rem] flex-shrink-0 flex-row items-center justify-center rounded-full ${publicSpaceController.state.feedView === PublicSpaceFeedView.FOCUS ? 'bg-orange-500' : 'bg-slate-400'}`}
        >
          <AstralTableIcon
            onClick={(e) => {
              e.stopPropagation();
              publicSpaceController.actions.updateFeedView(
                PublicSpaceFeedView.FOCUS,
              );
            }}
          />
        </div>
        <div
          className={`flex h-[3rem] w-[3rem] flex-shrink-0 flex-row items-center justify-center rounded-full ${publicSpaceController.state.feedView === PublicSpaceFeedView.CHAT ? 'bg-emerald-500' : 'bg-slate-400'}`}
        >
          <AstralChatIndicatorIcon
            onClick={(e) => {
              e.stopPropagation();
              publicSpaceController.actions.updateFeedView(
                PublicSpaceFeedView.CHAT,
              );
            }}
          />
        </div>
        <div
          className={`flex h-[3rem] w-[3rem] flex-shrink-0 flex-row items-center justify-center rounded-full ${publicSpaceController.state.feedView === PublicSpaceFeedView.POSTS ? 'bg-blue-500' : 'bg-slate-400'}`}
        >
          <AstralBookmarkIcon
            onClick={(e) => {
              e.stopPropagation();
              publicSpaceController.actions.updateFeedView(
                PublicSpaceFeedView.POSTS,
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
