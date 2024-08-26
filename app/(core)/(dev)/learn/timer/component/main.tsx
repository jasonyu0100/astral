'use client';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useEffect, useState } from 'react';

export function TimerComponent() {
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
    <GlassWindowFrame className='flex animate-pulse-slow flex-col space-y-[1rem] overflow-hidden rounded-[3rem] p-[2rem] py-[2rem]'>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
      <GlassWindowFrame className='flex h-[20rem] flex-col items-center overflow-hidden rounded-[1rem] p-[3rem] font-bold text-white text-opacity-80'>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
        <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
          <p className='flex w-full justify-center text-3xl transition-opacity'>
            {days} days : {hours} hrs :{' '}
            <span className='flex w-[3rem] justify-center px-[0.5rem]'>
              {minutes}
            </span>
            m :{' '}
            <span className='flex w-[3rem] justify-center px-[0.5rem]'>
              {seconds}
            </span>
            s
          </p>
          <div className='flex flex-row space-x-[1rem]'>
            <p className='text-lg font-bold'>Time Dilation: {timeDilation}x</p>
          </div>
          {/* <div className='flex flex-col items-center'>
            <p>Days : {days}</p>
            <p>Hours : {hours}</p>
            <p>Minutes : {minutes}</p>
            <p>Seconds : {seconds}</p>
          </div> */}
        </GlassWindowContents>
      </GlassWindowFrame>
      <div className='z-50 flex flex-row justify-between rounded-md px-[5rem] py-[3rem] font-extraBold text-lg text-white text-opacity-50'>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(0)}
        >
          Pause
        </div>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(1)}
        >
          1x
        </div>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(2)}
        >
          2x
        </div>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(5)}
        >
          5x
        </div>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(100)}
        >
          10x
        </div>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(100)}
        >
          20x
        </div>
        <div
          className='flex  cursor-pointer items-center justify-center '
          onClick={() => changeTimeDilation(100)}
        >
          100x
        </div>
      </div>
    </GlassWindowFrame>
  );
}
