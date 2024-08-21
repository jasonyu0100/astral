import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForVerseCommentObj } from '@/(server)/(model)/space/chapter/verse/comment/main';
import { roundedFx } from '@/(style)/data';
import { getFormmatedTimeDifference } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVerseContentComment() {
  const commentObj = useContext(ContextForVerseCommentObj);
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
        <div className='mt-[0.5rem] flex flex-row'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_3289_2246'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_3289_2246)'>
              <path d='M12 15L7 10H17L12 15Z' fill='#CBD5E1' />
            </g>
          </svg>
          <GlassWindowFrame
            className='h-[25px] w-[25px]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <p className='text-xs font-bold text-slate-500'>100</p>
            </GlassWindowContents>
          </GlassWindowFrame>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <mask
              id='mask0_3289_2240'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='25'
              height='25'
            >
              <rect
                x='0.6698'
                y='0.254883'
                width='24'
                height='24'
                fill='#D9D9D9'
              />
            </mask>
            <g mask='url(#mask0_3289_2240)'>
              <path
                d='M7.6698 14.2549L12.6698 9.25488L17.6698 14.2549H7.6698Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
