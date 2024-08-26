import { ContextForChapterReviewList } from '@/(server)/(controller)/space/chapter/review/list';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForChapterReviewObj } from '@/(server)/(model)/space/chapter/review/main';
import { useContext } from 'react';

export function SpaceReviewSidebarReview() {
  const review = useContext(ContextForChapterReviewObj);
  const reviewListController = useContext(ContextForChapterReviewList);

  return (
    <div
      className='flex h-[70px] w-full cursor-pointer flex-row items-center space-x-[2rem]'
      onClick={() => reviewListController.actions.stateActions.select(review)}
    >
      <img src={exampleFileElem.src} className='aspect-square h-full rounded' />
      <div className='flex flex-col'>
        <p className='text-md font-bold text-white'>{review.title}</p>
        <p className='text-sm text-white'>{review.description}</p>
      </div>
    </div>
  );
}
