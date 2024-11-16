import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { useContext } from 'react';
import { ContextForSpacesIdeasModals } from '../../../../../modal/controller/main';

export function SpacesIdeasSidebarChaptersItemDescription() {
  const spacesSpaceModalsController = useContext(ContextForSpacesIdeasModals);
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
            spacesSpaceModalsController.editChapterController.open()
          }
        />
      </div>
      <p className={'text-md font-light text-slate-300'}>
        {chapterObj?.objective || 'No objective'}
      </p>
    </>
  );
}
