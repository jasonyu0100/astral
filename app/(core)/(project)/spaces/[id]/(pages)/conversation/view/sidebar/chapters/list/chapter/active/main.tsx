import { ContextForSpacesConversationModals } from '@/(core)/(project)/spaces/[id]/(pages)/conversation/modal/controller/main';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesConversationChapterActive() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpacesConversationModals);

  return (
    <div
      className='flex w-full flex-col space-y-[0.5rem]'
      onClick={() => chapterListController.actions.stateActions.select(chapter)}
    >
      <div className='flex w-full flex-row flex-wrap items-center justify-between'>
        <p
          className={ctwn(
            'flex-grow animate-pulse-slow font-extraBold text-xl text-slate-300',
          )}
        >
          {chapter.title?.trim() || 'Untitled'}
        </p>
        <AstralMoreVertIcon
          onClick={() => modalController.editChapterController.open()}
        />
      </div>
      <p className='font-md w-full text-sm font-light text-slate-300'>
        {chapterListController.state.currentObj?.objective || 'Open-ended'}
      </p>
      <p className='font-md w-full text-sm font-light text-slate-300'>
        <span className='font-bold'>Summary: </span>
        {chapterListController.state.currentObj?.description || 'Open-ended'}
      </p>
    </div>
  );
}
