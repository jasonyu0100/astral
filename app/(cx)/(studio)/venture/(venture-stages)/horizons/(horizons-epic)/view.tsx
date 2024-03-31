'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(design)/(fx)/data';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { VentureHorizonsContainer } from './container/main';
import { VentureShelf } from './main/core/shelf/main';

export function VentureHorizonsView() {
  return (
    <VentureHorizonsContainer>
      {/* <VentureHeader /> */}
      <div className='flex flex-row'>
        <GlassAreaContainer
          sizeFx='w-full h-[100px]'
          glassFx={glassFx['glass-5']}
          className='flex flex-row items-center justify-between px-[50px]'
        >
          <div className='flex w-1/3 flex-row justify-start '></div>
          <div className='flex w-1/3  flex-row justify-center gap-[1rem]'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <mask
                  id='mask0_3148_31'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='24'
                  height='24'
                >
                  <rect width='24' height='24' fill='#D9D9D9' />
                </mask>
                <g mask='url(#mask0_3148_31)'>
                  <path
                    d='M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
            </button>
            <p className='text-3xl font-bold text-slate-300'>2024 Q1</p>{' '}
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <mask
                  id='mask0_3194_7'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='24'
                  height='24'
                >
                  <rect width='24' height='24' fill='#D9D9D9' />
                </mask>
                <g mask='url(#mask0_3194_7)'>
                  <path
                    d='M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className='flex w-1/3 flex-row justify-end '>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
              >
                <mask
                  id='mask0_3140_7'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='25'
                  height='25'
                >
                  <rect
                    x='0.777588'
                    y='0.335144'
                    width='24'
                    height='24'
                    fill='#D9D9D9'
                  />
                </mask>
                <g mask='url(#mask0_3140_7)'>
                  <path
                    d='M11.7776 13.3351H5.77759V11.3351H11.7776V5.33514H13.7776V11.3351H19.7776V13.3351H13.7776V19.3351H11.7776V13.3351Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
            </button>
          </div>
        </GlassAreaContainer>
      </div>
      <div className='flex h-full w-full flex-row'>
        <GlassAreaContainer
          sizeFx='h-full w-[320px]'
          borderFx={borderFx['border-r']}
          className='flex flex-col space-y-[2rem] overflow-auto px-[1rem]'
        >
          <div className='flex flex-col'>
            <div className='flex h-[60px] flex-shrink-0 items-center'>
              <p className='font-extraBold text-lg text-slate-500'>Scale</p>
            </div>
            <div className='ml-[0.25rem] flex flex-col space-y-[1rem]'>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <GlassWindowPane glassFx={glassFx['glass-5']} />
                <p className='text-md font-bold text-slate-300'>Local</p>
              </GlassWindowFrame>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>Group </p>
              </GlassWindowFrame>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>Cluster</p>
              </GlassWindowFrame>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex h-[60px] flex-shrink-0 items-center'>
              <p className='font-extraBold text-lg text-slate-500'>Modal</p>
            </div>
            <div className='ml-[0.25rem] flex flex-col space-y-[1rem]'>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>Music</p>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>Art</p>
              </GlassWindowFrame>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>Film</p>
              </GlassWindowFrame>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex h-[60px] flex-shrink-0 items-center'>
              <p className='font-extraBold text-lg text-slate-500'>Degree</p>
            </div>
            <div className='ml-[0.25rem] flex flex-col space-y-[1rem]'>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <GlassWindowPane glassFx={glassFx['glass-5']} />
                <p className='text-md font-bold text-slate-300'>1st</p>
              </GlassWindowFrame>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>2nd</p>
              </GlassWindowFrame>
              <GlassWindowFrame
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx.rounded}
                className='px-[1rem] py-[0.5rem]'
              >
                <p className='text-md font-bold text-slate-300'>3rd</p>
              </GlassWindowFrame>
            </div>
          </div>
        </GlassAreaContainer>
        <div
          className='flex flex-row overflow-auto'
          
          style={{ height: 'calc(100% - 100px)', width: 'calc(100% - 320px)' }}
        >
          <VentureShelf />
          <VentureShelf />
          <VentureShelf />
          <VentureShelf />
          <VentureShelf />
          <VentureShelf />
          <VentureShelf />
        </div>
      </div>
    </VentureHorizonsContainer>
  );
}
