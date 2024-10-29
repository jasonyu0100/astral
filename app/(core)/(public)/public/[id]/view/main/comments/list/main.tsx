import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForPostCommentList } from '@/server/controller/post/comment/list';
import { ContextForPostCommentObj } from '@/server/model/post/comment/main';
import { useContext } from 'react';
import { PublicSpacesPagesContentComment } from './comment/main';

export function PublicSpacesPagesList() {
  const commentListController = useContext(ContextForPostCommentList);

  return (
    <div className='flex w-full flex-col space-y-[2rem]'>
      <p className='font-extraBold text-xl text-slate-300'>
        Comments ({commentListController.state.objs.length})
      </p>
      <HorizontalDivider />
      {commentListController.state.objs.toReversed().map((comment) => (
        <ContextForPostCommentObj.Provider value={comment}>
          <PublicSpacesPagesContentComment />
        </ContextForPostCommentObj.Provider>
      ))}
    </div>
  );
}
