'use client';

import isVerseAuth from '@/(utils)/isAuth';
import { HorizonViewView } from './view/view';
import { HorizonViewSidebar } from './view/sidebar/main';
import { ProfileCover } from '@/(components)/(element)/profile/main';
import { exampleFileElem } from '@/(model)/elements/file/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { TimerComponent } from '@/(core)/(general)/learn/timer/component/main';

function Page() {
  return (
    <HorizonViewView>
      <div className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[2rem]'>
        <h1 className='text-lg font-bold text-slate-300'>HorizonView - Hiatus</h1>
        <h1 className='text-lg font-bold text-slate-300'>HorizonView - Normal</h1>
        <h1 className='text-lg font-bold text-slate-300'>HorizonView - On Track</h1>
        <h1 className='text-lg font-bold text-slate-300'>
          HorizonView - In progress
        </h1>
        <HorizontalDivider />
        <TimerComponent />
        <HorizontalDivider />
        <div className='flex flex-row items-center text-slate-300'>
          <ProfileCover file={exampleFileElem} />
          <p>BOB SMITH</p>
        </div>
        <HorizontalDivider />
        <div className='flex flex-row items-center text-slate-300'>
          <ProfileCover file={exampleFileElem} />
          <p>BOB SMITH vs Headphones</p>
        </div>
        <HorizontalDivider />
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-slate-300'>
            HorizonView - In progress
          </h1>
          <HorizontalDivider />
          <div className='flex flex-row items-center text-slate-300'>
            <ProfileCover file={exampleFileElem} />
            <p>BOB SMITH vs Headphones</p>
            <ProfileCover file={exampleFileElem} />
            <p>BOB SMITH vs Headphones</p>
            <ProfileCover file={exampleFileElem} />
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
      <HorizonViewSidebar />
    </HorizonViewView>
  );
}

export default isVerseAuth(Page);
