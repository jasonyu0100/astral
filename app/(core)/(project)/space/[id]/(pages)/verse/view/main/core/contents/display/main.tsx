import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVerseContentsDisplay() {
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <GlassAreaContainer
      name={SpaceVerseContentsDisplay.name}
      sizeFx='flex-grow h-full'
      className={`space-y-[3rem] overflow-auto p-[2rem]`}
    >
      <div className='flex h-full w-full flex-grow flex-col items-center justify-between'>
        <GlassWindowFrame
          className='h-[50px] w-[50px]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              verseListController.actions.stateActions.goPrev();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[2rem] w-[2rem]'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_3266_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='25'
                height='25'
              >
                <rect
                  x='0.0400391'
                  y='0.563477'
                  width='24'
                  height='24'
                  fill='#D9D9D9'
                />
              </mask>
              <g mask='url(#mask0_3266_7)'>
                <path
                  d='M12.04 11.3635L7.44004 15.9635L6.04004 14.5635L12.04 8.56348L18.04 14.5635L16.64 15.9635L12.04 11.3635Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='w-full p-[2rem] py-[4rem]'
          borderFx={`${borderFx['border-t']} ${borderFx['border-b']}`}
        >
          <GlassWindowContents className='flex w-full flex-row items-center space-x-[2rem]'>
            <p className='font-bold text-slate-500'>
              V
              {verseListController.state.objs.length -
                verseListController.state.index}
            </p>
            <img
              className='aspect-square h-[300px] border-[5px] border-white object-cover'
              src={verseListController.state.currentObj?.fileElem?.src}
            />
            <div className='space-y-[0.5rem] px-[0.5rem]'>
              <p className=' text-sm font-light text-white'>
                {getFormattedDate(
                  new Date(verseListController.state.currentObj?.created ?? ''),
                )}
              </p>
              <p className='text-xl font-bold text-white'>
                Verse - {verseListController.state.currentObj?.title}
              </p>
              <p className=' text-white'>
                {verseListController.state.currentObj?.description}
              </p>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='h-[50px] w-[50px]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              verseListController.actions.stateActions.goNext();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[2rem] w-[2rem]'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_3266_13'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_3266_13)'>
                <path
                  d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}
