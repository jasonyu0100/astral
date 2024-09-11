import { ContextForSpotlightCommentList } from '@/(server)/controller/space/chapter/spotlight/comment/list';
import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext, useState } from 'react';

export function SpacesFlightInput() {
  const [message, setMessage] = useState('');
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );
  const commentListController = useContext(ContextForSpotlightCommentList);

  async function createComment() {
    commentListController.actions.createActions.createComment(
      loggedInUser.id,
      spotlightListController.state.objId,
      message,
    );
  }

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <GlassWindowFrame
        className='h-[6rem] w-full'
        roundedFx={roundedFx['rounded']}
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
          className='cursor-pointer p-[0.5rem]'
          onClick={() => {
            setMessage('');
          }}
        >
          <p className='font-bold text-slate-300'>Clear</p>
        </div>
        <div
          className='cursor-pointer rounded-full bg-blue-500 p-[0.5rem] px-[1rem]'
          onClick={() => {
            createComment();
            setMessage('');
          }}
        >
          <p className='font-bold text-slate-300'>Comment</p>
        </div>
      </div>
    </div>
  );
}
