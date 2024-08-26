import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { ContextForReviewCommentObj } from '@/(server)/(model)/space/chapter/review/comment/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceReviewSidebarComment() {
  const comment = useContext(ContextForReviewCommentObj);
  const userController = useControllerForUserMain(comment.userId);

  return (
    <GlassWindowFrame
      name='temp'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='flex- flex p-[1rem]'
    >
      <GlassWindowContents className='flex flex-col'>
        <p className='text-xl font-bold text-slate-300'>
          {userController.state.obj.displayName}
        </p>
        <p className='font-bold text-slate-500'>{comment.message}</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
