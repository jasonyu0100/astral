import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import {
  ContextForTaskList,
  calculateCompletionColor,
} from '@/server/controller/task/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesChatModals } from '../../../../../modal/controller/main';

export function SpacesChatSidebarChapter() {
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapterObj);
  const spacesChatModalController = useContext(ContextForSpacesChatModals);
  const taskListController = useContext(ContextForTaskList);
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
              className='flex w-full flex-col space-y-[0.5rem]'
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
                    spacesChatModalController.editChapterController.open()
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
            </div>
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
