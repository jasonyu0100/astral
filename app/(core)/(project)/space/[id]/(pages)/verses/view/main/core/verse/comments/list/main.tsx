import { ContextForVerseCommentList } from '@/(server)/(controller)/space/chapter/verse/comment/list';
import { ContextForVerseCommentObj } from '@/(server)/(model)/space/chapter/verse/comment/main';
import { useContext } from 'react';
import { SpaceVerseContentComment } from './comment/main';

export function SpaceVersesContentList() {
  const commentListController = useContext(ContextForVerseCommentList);

  return (
    <div className='flex w-full max-w-[800px] flex-col space-y-[2rem] pb-[2rem]'>
      {commentListController.state.objs.map((comment) => (
        <ContextForVerseCommentObj.Provider value={comment}>
          <SpaceVerseContentComment />
        </ContextForVerseCommentObj.Provider>
      ))}
    </div>
  );
}
