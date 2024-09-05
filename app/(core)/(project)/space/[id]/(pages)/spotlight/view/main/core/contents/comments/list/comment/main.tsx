import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForSpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceSpotlightContentComment() {
  const commentObj = useContext(ContextForSpotlightCommentObj);
  const commentUser = useControllerForUserMain(commentObj.userId);

  return (
    <div className='flex w-full flex-row items-center'>
      <div className='flex w-full flex-col'>
        <div className='flex w-full flex-row items-center space-x-[1rem]'>
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
        <div className='flex w-full flex-row justify-between pl-[4rem]'>
          <p className='text-lg font-light text-slate-300'>
            {commentObj.message}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <AstralChevronUpIcon className='h-[3rem] w-[3rem]' />
        <p className='text-lg font-bold text-slate-300'>213</p>

        <AstralChevronDownIcon className='h-[3rem] w-[3rem]' />
      </div>
    </div>
  );
}
