import { ContextForPostCommentList } from '@/architecture/controller/post/comment/list';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralArrowUpwardIcon } from '@/icons/arrow-upward/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext, useState } from 'react';

export function PublicSpacePostCommentsInput() {
  const [message, setMessage] = useState('');
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const commentListController = useContext(ContextForPostCommentList);

  async function createComment() {
    commentListController.actions.createActions.createComment(
      loggedInUser?.id,
      postListController.state.objId,
      message,
    );
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      createComment();
    }
  };

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <div className='flex flex-row items-center justify-between space-x-[2rem]'>
        <GlassWindowFrame
          className='h-[6rem] w-full'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents>
            <input
              className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent p-[2rem] font-bold text-slate-300 outline-none'
              placeholder='Add comment...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            ></input>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <div className='flex flex-row items-center justify-end space-x-[1rem]'>
          <div
            className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              createComment();
              setMessage('');
            }}
          >
            <AstralArrowUpwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
