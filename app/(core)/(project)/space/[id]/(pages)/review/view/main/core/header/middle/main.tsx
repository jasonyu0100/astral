import { ContextForChapterReviewList } from '@/(server)/(controller)/space/chapter/review/list';
import { useContext } from 'react';
import { SpaceReviewExpandIcon } from './expand/main';

export function SpaceReviewHeaderMiddle() {
  const reviewListController = useContext(ContextForChapterReviewList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        review - {reviewListController.state?.currentObj?.title || 'None'}
      </p>
      <SpaceReviewExpandIcon />
    </div>
  );
}
