import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { ContextForVerseCommentObj } from '@/(server)/(model)/space/chapter/verse/comment/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceFlowSidebarEntry() {
  const flippableController = useControllerForFlippable();
  const commentObj = useContext(ContextForVerseCommentObj);
  const user = useControllerForUserMain(commentObj.userId);

  return (
    <GlassWindowFrame
      name='temp'
      roundedFx={roundedFx.rounded}
      className='aspect-[13/9] w-full flex-shrink-0'
    >
      {flippableController.flipped ? (
        <>
          <GlassWindowContents
            className='flex cursor-pointer flex-col justify-between  overflow-auto p-[1rem]'
            onClick={flippableController.flip}
          >
            <div className='w-full'>
              <p className='font-permanentMarker  text-lg text-slate-300'>
                {user.state.obj.displayName}
              </p>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </>
      ) : (
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[0.5rem] overflow-auto bg-black p-[1rem]'
          onClick={flippableController.flip}
        >
          <>
            <div className='text-md list-disc font-bold text-white'>
              {commentObj.message}
            </div>
          </>
        </GlassWindowContents>
      )}
    </GlassWindowFrame>
  );
}
