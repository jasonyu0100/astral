import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { roundedFx, glassFx } from '@/(style)/data';
import { useState, useEffect } from 'react';

export function JournalMainFooter() {
  const originalTime = 10000; // 100 x 100
  const [timeDilation, changeTimeDilation] = useState(1);
  const [timeElapsed, changeTimeElapsed] = useState(0);
  const currentTime = originalTime - timeElapsed;
  const days = Math.floor(currentTime / 60 / 60 / 24);
  const hours = Math.floor(currentTime / 60 / 60) % 24;
  const minutes = Math.floor(currentTime / 60) % 60;
  const seconds = currentTime % 60;

  useEffect(() => {
    const duration =
      timeDilation === 0
        ? Math.pow(10, 10)
        : Math.floor(1000 / Math.abs(timeDilation));
    setTimeout(() => {
      if (timeDilation < 0) {
        changeTimeElapsed(timeElapsed - 1);
      } else {
        changeTimeElapsed(timeElapsed + 1);
      }
    }, duration);
  });
  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0 shadow-glow'>
      <GlassWindowContents className='flex flex-row items-center px-[2rem]'>
        <div className='flex w-1/3 flex-row items-center justify-start space-x-[1rem]'>
          <GlassWindowFrame roundedFx={roundedFx['rounded-full']}>
            <GlassWindowContents
              className='flex w-[12rem] items-center justify-center p-[1rem]'
              onClick={() => changeTimeDilation(1)}
            >
              <p className='flex w-full font-bold animate-pulse-slow justify-center text-xl text-slate-300 transition-opacity'>
                {String(hours).padStart(2, '0')} :{' '}
                <span className='flex w-[2rem] justify-center px-[4px]'>
                  {String(minutes).padStart(2, '0')}
                </span>
                m :{' '}
                <span className='flex w-[2rem] justify-center px-[4px]'>
                  {String(seconds).padStart(2, '0')}
                </span>
                s
              </p>
            </GlassWindowContents>
          </GlassWindowFrame>
          <GlassWindowFrame
            className='aspect-square h-[1rem] w-[1rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className='flex items-center justify-center'
              onClick={() => changeTimeDilation(1)}
            >
              <p className='text-3xl font-bold text-slate-300'>-</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <GlassWindowFrame
            className='aspect-square h-[1rem] w-[1rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className='flex items-center justify-center'
              onClick={() => changeTimeDilation(100)}
            >
              <p className='text-3xl font-bold text-slate-300'>+</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <div className='flex w-1/3 flex-row justify-center space-x-[1rem] '>
          <GlassWindowFrame
            className='aspect-square h-[3rem] w-[3rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <p className='text-3xl font-bold text-slate-300'>+</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <div className='flex w-1/3 flex-row justify-end  space-x-[1rem]'>
          <p className='text-xl font-bold text-slate-300'>16 / 50</p>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
