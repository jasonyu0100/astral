import { ContextForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ContextForPostCommentObj } from '@/architecture/model/post/comment/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function PublicSpacePageCommentMessage() {
  const userController = useContext(ContextForUserMain);
  const commentObj = useContext(ContextForPostCommentObj);

  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full flex-row items-center space-x-[1rem]'>
        <img
          className='aspect-square h-[3rem] rounded-full'
          src={userController.state.obj?.dp?.src || exampleFileElement.src}
        />
        <p className='text-xl font-bold text-slate-300'>
          {userController.state.obj.displayName || 'Unknown'}{' '}
          <span className='text-lg text-slate-400'>
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
  );
}
