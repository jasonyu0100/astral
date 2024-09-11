import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForSpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpacesFlightSidebarComment() {
  const comment = useContext(ContextForSpotlightCommentObj);
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
