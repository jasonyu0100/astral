import {
  ContextForCommentKarmaList,
  useControllerForCommentKarmaList,
} from '@/(server)/controller/space/chapter/spotlight/comment/karma/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import { ContextForSpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { SpacesFlightCommentKarma } from './karma/main';
import { SpacesFlightCommentMessage } from './message/main';

export function SpacesFlightContentComment() {
  const commentObj = useContext(ContextForSpotlightCommentObj);
  const commentUser = useControllerForUserMain(commentObj.userId);
  const commentKarma = useControllerForCommentKarmaList(commentObj.id);

  return (
    <ContextForUserMain.Provider value={commentUser}>
      <ContextForCommentKarmaList.Provider value={commentKarma}>
        <GlassWindowFrame className='w-full'>
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
            <SpacesFlightCommentMessage />
            <SpacesFlightCommentKarma />
          </GlassWindowContents>
        </GlassWindowFrame>
      </ContextForCommentKarmaList.Provider>
    </ContextForUserMain.Provider>
  );
}
