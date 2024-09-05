import { ContextForSpotlightCommentList } from '@/(server)/controller/space/chapter/spotlight/comment/list';
import { ContextForSpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { useContext } from 'react';
import { SpaceSpotlightContentComment } from './comment/main';

export function SpaceSpotlightList() {
  const commentListController = useContext(ContextForSpotlightCommentList);

  return (
    <div className='flex w-full flex-col space-y-[2rem] pb-[2rem]'>
      {commentListController.state.objs.toReversed().map((comment) => (
        <ContextForSpotlightCommentObj.Provider value={comment}>
          <SpaceSpotlightContentComment />
        </ContextForSpotlightCommentObj.Provider>
      ))}
    </div>
  );
}
