import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForReviewCommentObj } from '@/(server)/model/space/chapter/review/comment/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceReviewContentComment() {
  const commentObj = useContext(ContextForReviewCommentObj);
  const commentUser = useControllerForUserMain(commentObj.userId);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row  items-center space-x-[1rem]'>
        <img
          className='aspect-square h-[3rem] rounded-full'
          src={exampleFileElem.src}
        />
        <p className='text-xl font-bold text-slate-300'>
          {commentUser.state.obj.displayName}{' '}
          <span className='text-lg text-slate-500'>
            - {getFormmatedTimeDifference(new Date(commentObj.created))}
          </span>
        </p>
      </div>
      <div className='flex flex-grow flex-col pl-[4rem]'>
        <p className='text-lg font-light text-slate-300'>
          {commentObj.message}
        </p>
        {/* <div className='mt-[0.5rem] flex flex-row'>
          <AstralChevronUpIcon />
          <GlassWindowFrame
            className='h-[25px] w-[25px]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <p className='text-xs font-bold text-slate-500'>100</p>
            </GlassWindowContents>
          </GlassWindowFrame>
          <AstralChevronDownIcon />
        </div> */}
      </div>
    </div>
  );
}
