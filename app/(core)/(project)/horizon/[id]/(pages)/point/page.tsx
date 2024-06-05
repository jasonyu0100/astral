'use client';

import isVerseAuth from '@/(utils)/isAuth';
import { PointView } from './view/view';
import { PointSidebar } from './view/sidebar/main';
import { ProfileCover } from '@/(components)/(element)/profile/main';
import { exampleFile } from '@/(model)/concept/file/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { TimerComponent } from '@/(core)/(misc)/learn/timer/component/main';

function Page() {
  return (
    <PointView>
      <div className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[2rem]'>
        <h1 className='text-lg font-bold text-slate-300'>Point - Hiatus</h1>
        <h1 className='text-lg font-bold text-slate-300'>Point - Normal</h1>
        <h1 className='text-lg font-bold text-slate-300'>Point - On Track</h1>
        <h1 className='text-lg font-bold text-slate-300'>
          Point - In progress
        </h1>
        <Divider />
        <TimerComponent />
        <Divider />
        <div className='flex flex-row items-center text-slate-300'>
          <ProfileCover file={exampleFile} />
          <p>BOB SMITH</p>
        </div>
        <Divider />
        <div className='flex flex-row items-center text-slate-300'>
          <ProfileCover file={exampleFile} />
          <p>BOB SMITH vs Headphones</p>
        </div>
        <Divider />
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-slate-300'>
            Point - In progress
          </h1>
          <Divider />
          <div className='flex flex-row items-center text-slate-300'>
            <ProfileCover file={exampleFile} />
            <p>BOB SMITH vs Headphones</p>
            <ProfileCover file={exampleFile} />
            <p>BOB SMITH vs Headphones</p>
            <ProfileCover file={exampleFile} />
            <p>BOB SMITH vs Headphones</p>
          </div>
          <GlassWindowFrame className='h-[500px] w-[500px]'>
            <p>
              AI IMAGE GEN TRIBULATION BASED OFF DATE AND KEYWORD FOR
              INSPIRATION
            </p>
            <img
              src='https://www.nvidia.com/content/dam/en-zz/Solutions/reseDualh/ai-playground/nvidia-picasso-3c33-p@2x.jpg'
              className='h-full object-contain'
            />
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
          <button className='bg-white p-[1rem] text-black'>
            Create Contest
          </button>
        </div>
      </div>
      <PointSidebar />
    </PointView>
  );
}

export default isVerseAuth(Page);
