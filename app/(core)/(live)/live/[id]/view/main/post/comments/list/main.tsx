import { ContextForPostCommentList } from '@/architecture/controller/post/comment/list';
import { ContextForPostCommentObj } from '@/architecture/model/post/comment/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { PublicSpacePageContentComment } from './comment/main';

export function PublicSpacePostCommentsList() {
  const commentListController = useContext(ContextForPostCommentList);

  return (
    <div className='flex w-full flex-col space-y-[2rem]'>
      <p className='font-extraBold text-lg text-slate-500'>
        Comments ({commentListController.state.objs.length})
      </p>
      <HorizontalDivider />
      {commentListController.state.objs.toReversed().map((comment) => (
        <ContextForPostCommentObj.Provider value={comment}>
          <PublicSpacePageContentComment />
        </ContextForPostCommentObj.Provider>
      ))}
    </div>
  );
}
