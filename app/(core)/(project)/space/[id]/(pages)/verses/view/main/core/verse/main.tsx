import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVersesContentsVerse() {
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceVersesContentsVerse.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto p-[2rem]`}
      >
        <div className='flex h-full flex-grow flex-col items-center space-y-[2rem] px-[8rem]'>
          <div className='flex h-full max-w-[800px] flex-col space-y-[2rem]'>
            {/* <p className='font-bold text-slate-500'>
              V
              {verseListController.state.objs.length -
                verseListController.state.index}
            </p> */}
            <div>
              <img
                className='max-w-[800px] flex-shrink-0 border-[5px] border-white object-cover'
                src={verseListController.state.currentObj?.fileElem?.src}
              />
            </div>
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
          </div>
          <HorizontalDivider />
          <div className='flex w-full max-w-[800px] flex-col space-y-[2rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              <GlassWindowFrame
                className='h-[5rem] w-full'
                borderFx={borderFx['border-b']}
              >
                <GlassWindowContents>
                  <input
                    className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
                    placeholder='Venture forth...'
                  ></input>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
              <div className='flex flex-row items-center justify-end space-x-[1rem]'>
                <div className='p-[0.5rem]'>
                  <p className='font-bold text-slate-300'>Clear</p>
                </div>
                <div className='bg-blue-500 p-[0.5rem]'>
                  <p className='font-bold text-slate-300'>Comment</p>
                </div>
              </div>
            </div>
            <br />
            <div className='flex flex-col'>
              <div className='flex flex-row  items-center space-x-[1rem]'>
                <img
                  className='aspect-square h-[2rem] rounded-full'
                  src={exampleFileElem.src}
                />
                <p className='text-sm font-bold text-slate-300'>DICKHEAD</p>
              </div>
              <div className='flex flex-grow flex-col pl-[3rem]'>
                <p className='text-xs font-light text-slate-300'>
                  Sounds like shit
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
            <div className='flex flex-row items-center space-x-[1rem]'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <div className='flex flex-grow flex-col'>
                <p className='font-bold text-slate-300'>adsasda</p>
                <p className='text-xs font-light text-slate-300'>adsasda</p>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <div className='flex flex-grow flex-col'>
                <p className='font-bold text-slate-300'>adsasda</p>
                <p className='text-xs font-light text-slate-300'>adsasda</p>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <div className='flex flex-grow flex-col'>
                <p className='font-bold text-slate-300'>adsasda</p>
                <p className='text-xs font-light text-slate-300'>adsasda</p>
              </div>
            </div>
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
