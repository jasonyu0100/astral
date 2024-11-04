import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  calculateCompletionColor,
  useControllerForTaskList,
} from '@/architecture/controller/task/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
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
              <AstralChatIndicatorIcon
                onClick={() => {
                  window.location.href = `${spacesMap.spaces.id.chat.link(
                    spaceMainController.state.objId,
                  )}?chapter=${chapterObj.id}`;
                }}
              />
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
