import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVersesVerseMain() {
  const verseListController = useContext(ContextForChapterVerseList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='flex h-full w-[800px] flex-col space-y-[1rem]'>
      <div className='space-y-[0.5rem] px-[2rem]'>
        <p className=' text-sm font-light text-white'>
          {getFormattedDate(
            new Date(verseListController.state.currentObj?.created ?? ''),
          )}
        </p>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <img
            className='aspect-square h-[2rem] rounded-full'
            src={loggedInUser.dp.src}
          />
          <p className='text-xl font-bold text-white'>
            Verse - {verseListController.state.currentObj?.title}
          </p>
        </div>
        <p className=' text-white'>
          {verseListController.state.currentObj?.description}
        </p>
      </div>
      <div className='flex flex-row space-x-[2rem]'>
        <div className='flex aspect-[12/9] w-[900px] items-center justify-center rounded-[2rem] bg-black'>
          <img
            className='h-full flex-shrink-0 rounded-[2rem] object-contain'
            src={verseListController.state.currentObj?.fileElem?.src}
          />
        </div>
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
  );
}
