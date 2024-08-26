import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterReviewList } from '@/(server)/(controller)/space/chapter/review/list';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { SpaceReviewReviewModal } from '../../../../../(modal)/add/review/main';

export function SpaceReviewHeaderLeft() {
  const reviewListController = useContext(ContextForChapterReviewList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceReviewReviewModal />
      </ContextForOpenable.Provider>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <p className='text-md font-light text-slate-300'>
          {getFormattedDate(new Date())}
        </p>
      </div>
    </>
  );
}
