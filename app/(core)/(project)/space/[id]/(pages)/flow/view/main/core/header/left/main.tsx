import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { SpaceFlowAddVerseModal } from '../../../../../(modal)/add/verse/main';

export function SpaceFlowHeaderLeft() {
  const verseListController = useContext(ContextForChapterVerseList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceFlowAddVerseModal />
      </ContextForOpenable.Provider>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <p className='text-md font-light text-slate-300'>
          {getFormattedDate(new Date())}
        </p>
      </div>
    </>
  );
}
