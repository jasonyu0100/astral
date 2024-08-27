import { ContextForChapterReviewList } from '@/(server)/controller/space/chapter/review/list';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';

export function SpaceReviewHeaderMiddle() {
  const reviewListController = useContext(ContextForChapterReviewList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        review - {reviewListController.state?.currentObj?.title || 'None'}
      </p>
      <AstralChevronRightIcon />
    </div>
  );
}
