import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import {
  ContextForCommentKarmaList,
  useControllerForCommentKarmaList,
} from '@/server/controller/post/comment/karma/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/server/controller/user/main';
import { ContextForPostCommentObj } from '@/server/model/post/comment/main';
import { useContext } from 'react';
import { PublicSpacesPagesCommentKarma } from './karma/main';
import { PublicSpacesPagesCommentMessage } from './message/main';

export function PublicSpacesPagesContentComment() {
  const commentObj = useContext(ContextForPostCommentObj);
  const commentUser = useControllerForUserMain(commentObj.userId);
  const commentKarma = useControllerForCommentKarmaList(commentObj.id);

  return (
    <ContextForUserMain.Provider value={commentUser}>
      <ContextForCommentKarmaList.Provider value={commentKarma}>
        <GlassWindowFrame className='w-full'>
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
            <PublicSpacesPagesCommentMessage />
            <PublicSpacesPagesCommentKarma />
          </GlassWindowContents>
        </GlassWindowFrame>
      </ContextForCommentKarmaList.Provider>
    </ContextForUserMain.Provider>
  );
}
