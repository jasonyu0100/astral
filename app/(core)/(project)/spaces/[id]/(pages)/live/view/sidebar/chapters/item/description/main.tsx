import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { useContext } from 'react';
import { ContextForSpacesLiveModals } from '../../../../../modal/controller/main';

export function SpacesLiveSidebarChaptersItemDescription() {
  const spacesLiveModalsController = useContext(ContextForSpacesLiveModals);
  const chapterObj = useContext(ContextForSpaceChapterObj);

  return (
    <>
      <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
        <p
          className={
            'flex-grow animate-pulse-slow font-extraBold text-2xl text-slate-300'
          }
        >
          {chapterObj.title?.trim() || 'Untitled'}
        </p>
        <AstralMoreVertIcon
          onClick={() =>
            spacesLiveModalsController.editChapterController.open()
          }
        />
      </div>
      <p className={'text-md font-light text-slate-300'}>
        {chapterObj?.objective || 'No objective'}
      </p>
      <p className={'text-md font-light text-slate-300'}>
        {chapterObj?.description || 'No summary'}
      </p>
    </>
  );
}
