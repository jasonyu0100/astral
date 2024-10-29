import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralArrowUpwardIcon } from '@/icons/arrow-upward/main';
import { ContextForPostCommentList } from '@/server/controller/post/comment/list';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext, useState } from 'react';

export function SpacesPagesInput() {
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

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <div className='flex flex-row items-center justify-between space-x-[1rem]'>
        <GlassWindowFrame
          className='h-[6rem] w-full'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents>
            <input
              className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent p-[2rem] font-bold text-slate-300 outline-none'
              placeholder='Venture forth...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
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
