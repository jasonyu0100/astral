import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/projects/view/sidebar/(common)/list/option/main';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import {
  ContextForTaskList,
  calculateCompletionColor,
} from '@/architecture/controller/task/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesUpdates,
  SpacesUpdatesFeedView,
} from '../../../../controller/main';
import { ContextForSpacesUpdatesModals } from '../../../../modal/controller/main';

export function SpacesUpdatesSidebarChaptersChapter() {
  const spacesUpdatesModalController = useContext(
    ContextForSpacesUpdatesModals,
  );
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useContext(ContextForTaskList);
  const completionColor = calculateCompletionColor(taskListController);
  const spacesUpdatesController = useContext(ContextForSpacesUpdates);

  return (
    <div
      className='w-full cursor-pointer'
      onClick={() => {
        chapterListController.actions.stateActions.select(chapterObj);
        spacesUpdatesController.actions.updateFeedView(
          SpacesUpdatesFeedView.CHAPTER,
        );
      }}
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
                  spacesUpdatesModalController.editChapterController.open()
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
            <p className={ctwn('text-lg font-bold text-slate-300')}>
              {chapterObj?.title || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </div>
  );
}
