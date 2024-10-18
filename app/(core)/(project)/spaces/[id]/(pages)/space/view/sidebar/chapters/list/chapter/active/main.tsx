import { ContextForSpacesSpaceModals } from '@/(core)/(project)/spaces/[id]/(pages)/space/modal/controller/main';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesSpaceChapterActive() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpacesSpaceModals);

  return (
    <div
      className='flex w-full flex-col space-y-[0.5rem]'
      onClick={() => chapterListController.actions.stateActions.select(chapter)}
    >
      <div className='flex w-full flex-row items-center justify-between'>
        <p
          className={ctwn(
            'w-full animate-pulse-slow whitespace-nowrap text-start font-extraBold text-xl text-slate-300',
          )}
        >
          {chapter.title?.trim() || 'Untitled'}
        </p>
        <AstralMoreVertIcon
          onClick={() => modalController.editChapterController.open()}
        />
      </div>
      <p className='font-md w-full text-start text-sm font-light text-slate-300'>
        <span className='font-bold'>Chapter: </span>
        {chapterListController.state.currentObj?.objective || 'Open-ended'}
      </p>
      <p className='font-md w-full text-start text-sm font-light text-slate-300'>
        <span className='font-bold'>Objective: </span>
        {chapterListController.state.currentObj?.description || 'Open-ended'}
      </p>
    </div>
  );
}
