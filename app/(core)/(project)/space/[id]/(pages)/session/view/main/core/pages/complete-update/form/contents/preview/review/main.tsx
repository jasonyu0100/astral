import { useControllerForChapterReviewMain } from '@/(server)/controller/space/chapter/review/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/model/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceSessionUpdatePreviewReview() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const reviewController = useControllerForChapterReviewMain(
    sessionUpdate?.reviewId || '',
  );

  return (
    <>
      <p className='text-xl font-bold text-slate-300'>
        {reviewController.state.obj.variant === ElementVariant.FILE && (
          <img
            className='max-h-[200px] w-full object-contain shadow-lg'
            src={reviewController.state.obj.fileElem?.src}
          />
        )}
        <br />
        {reviewController.state.obj.title}
        {reviewController.state.obj.description}
      </p>
    </>
  );
}
