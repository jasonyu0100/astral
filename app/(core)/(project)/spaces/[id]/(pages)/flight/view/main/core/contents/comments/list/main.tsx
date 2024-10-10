import { ContextForPostCommentList } from '@/(server)/controller/post/comment/list';
import { ContextForPostCommentObj } from '@/(server)/model/post/comment/main';
import { useContext } from 'react';
import { SpacesFlightContentComment } from './comment/main';

export function SpacesFlightList() {
  const commentListController = useContext(ContextForPostCommentList);

  return (
    <div className='flex w-full flex-col space-y-[2rem] py-[2rem]'>
      <p className='text-xl font-bold text-slate-500'>
        Comments ({commentListController.state.objs.length})
      </p>
      {commentListController.state.objs.toReversed().map((comment) => (
        <ContextForPostCommentObj.Provider value={comment}>
          <SpacesFlightContentComment />
        </ContextForPostCommentObj.Provider>
      ))}
    </div>
  );
}
