import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVersesVerseMain() {
  const verseListController = useContext(ContextForChapterVerseList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='flex flex-row space-x-[2rem]'>
      <div className='flex flex-col space-y-[2rem]'>
        <div className='space-y-[0.5rem] px-[1rem]'>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(verseListController.state.currentObj?.created ?? ''),
            )}
          </p>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <img
              className='aspect-square h-[3rem] rounded-full'
              src={loggedInUser.dp.src}
            />
            <p className='text-xl font-bold text-white'>
              Verse - {verseListController.state.currentObj?.title}
            </p>
          </div>
        </div>
        <div className='flex flex-row space-x-[2rem]'>
          <GlassWindowFrame
            className='aspect-[16/9] w-[600px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='h-full w-full'>
              <img
                className='h-full w-full object-contain'
                src={verseListController.state.currentObj?.fileElem?.src}
              />
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <div className='flex flex-col items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[5rem] w-[5rem]'
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
            <p className='text-xl font-bold text-slate-500'>100</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[5rem] w-[5rem]'
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
          </div>
        </div>
      </div>

      {/* <p className='border-l-[2px] border-slate-300 border-opacity-30 px-[1rem] text-slate-500'>
        {verseListController.state.currentObj?.description}
      </p> */}
    </div>
  );
}
