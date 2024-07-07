import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForVerseCommentList } from '@/(server)/(controller)/space/chapter/verse/comment/list';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext, useState } from 'react';

export function SpaceIdeasContentInput() {
  const [message, setMessage] = useState('');
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const verseListController = useContext(ContextForChapterVerseList);
  const commentListController = useContext(ContextForVerseCommentList);

  async function createComment() {
    commentListController.actions.createActions.createComment(
      loggedInUser.id,
      verseListController.state.objId,
      message,
    );
  }

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <GlassWindowFrame
        className='h-[4rem] w-full'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <input
            className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-700 outline-none'
            placeholder='Venture forth...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <div className='flex flex-row items-center justify-end space-x-[1rem]'>
        <div
          className='cursor-pointer p-[0.5rem]'
          onClick={() => {
            setMessage('');
          }}
        >
          <p className='font-bold text-slate-700'>Clear</p>
        </div>
        <div
          className='cursor-pointer rounded-full bg-blue-500 p-[0.5rem] px-[1rem]'
          onClick={() => {
            createComment();
            setMessage('');
          }}
        >
          <p className='font-bold text-white'>Add Comment</p>
        </div>
      </div>
    </div>
  );
}
