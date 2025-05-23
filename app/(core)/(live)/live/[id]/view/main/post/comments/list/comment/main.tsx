import {
  ContextForCommentKarmaList,
  useControllerForCommentKarmaList,
} from '@/architecture/controller/post/comment/karma/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/architecture/controller/user/main';
import { ContextForPostCommentObj } from '@/architecture/model/post/comment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { PublicSpacePageCommentKarma } from './karma/main';
import { PublicSpacePageCommentMessage } from './message/main';

export function PublicSpacePageContentComment() {
  const commentObj = useContext(ContextForPostCommentObj);
  const commentUser = useControllerForUserMain(commentObj.userId);
  const commentKarma = useControllerForCommentKarmaList(commentObj.id);

  return (
    <ContextForUserMain.Provider value={commentUser}>
      <ContextForCommentKarmaList.Provider value={commentKarma}>
        <GlassWindowFrame className='w-full'>
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
            <PublicSpacePageCommentMessage />
            <PublicSpacePageCommentKarma />
          </GlassWindowContents>
        </GlassWindowFrame>
      </ContextForCommentKarmaList.Provider>
    </ContextForUserMain.Provider>
  );
}
