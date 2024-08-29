import { ContextForReviewCommentList } from '@/(server)/controller/space/chapter/review/comment/list';
import { ContextForReviewCommentObj } from '@/(server)/model/space/chapter/review/comment/main';
import { useContext } from 'react';
import { SpaceReviewContentComment } from './comment/main';

export function SpaceReviewList() {
  const commentListController = useContext(ContextForReviewCommentList);

  return (
    <div className='flex w-full max-w-[800px] flex-col space-y-[2rem] pb-[2rem]'>
      {commentListController.state.objs.toReversed().map((comment) => (
        <ContextForReviewCommentObj.Provider value={comment}>
          <SpaceReviewContentComment />
        </ContextForReviewCommentObj.Provider>
      ))}
    </div>
  );
}
