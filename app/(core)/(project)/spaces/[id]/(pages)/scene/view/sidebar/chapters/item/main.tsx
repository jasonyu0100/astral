import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/projects/view/sidebar/(common)/list/option/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesSceneModals } from '../../../../modal/controller/main';

export function SpacesSceneSidebarChaptersChapter() {
  const spacesSceneModalsController = useContext(ContextForSpacesSceneModals);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const selected = chapterListController.state.objId === chapterObj.id;

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
              <p
                className={
                  'flex-grow animate-pulse-slow font-extraBold text-xl text-slate-300'
                }
              >
                {chapterObj.title?.trim() || 'Untitled'}
              </p>
              <AstralMoreVertIcon
                onClick={() =>
                  spacesSceneModalsController.editChapterController.open()
                }
              />
            </div>
            <p className={'text-sm font-light text-slate-300'}>
              <span className='font-bold'>Objective: </span>
              {chapterObj?.objective || 'No objective'}
            </p>
            <p className={'text-sm font-light text-slate-300'}>
              <span className='font-bold'>Summary: </span>
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
