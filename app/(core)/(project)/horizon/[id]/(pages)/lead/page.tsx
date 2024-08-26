'use client';

import { TimerComponent } from '@/(core)/(dev)/learn/timer/component/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import isAstralAuth from '@/utils/isAuth';
import { HorizonLeadView } from './view/main';
import { HorizonLeadSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonLeadView>
      <HorizonLeadSidebar />
      <div className='h-full w-full'>
        <GlassWindowFrame name='temp' className='h-[4rem] w-full'>
          <GlassWindowContents className='flex flex-row'></GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <div className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[3rem]'>
          {/* <h1 className='text-lg font-bold text-slate-300'>HorizonView - Hiatus</h1>
        <h1 className='text-lg font-bold text-slate-300'>HorizonView - Normal</h1> */}
          <h1 className='animate-pulse text-lg font-bold text-slate-300'>
            HorizonView - On Track
          </h1>
          <br />
          {/* <h1 className='text-lg font-bold text-slate-300'>
          HorizonView - In progress
        </h1> */}
          <TimerComponent />
          {/* <div className='flex flex-row items-center text-slate-300'>
          <ProfileCover fileElem={exampleFileElem} />
          <p>BOB SMITH</p>
        </div>
        <HorizontalDivider />
        <div className='flex flex-row items-center text-slate-300'>
          <ProfileCover fileElem={exampleFileElem} />
          <p>BOB SMITH vs Headphones</p>
        </div>
        <HorizontalDivider />
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-slate-300'>
            HorizonView - In progress
          </h1>
          <HorizontalDivider />
          <div className='flex flex-row items-center text-slate-300'>
            <ProfileCover fileElem={exampleFileElem} />
            <p>BOB SMITH vs Headphones</p>
            <ProfileCover fileElem={exampleFileElem} />
            <p>BOB SMITH vs Headphones</p>
            <ProfileCover fileElem={exampleFileElem} />
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
        </div> */}
        </div>
      </div>
    </HorizonLeadView>
  );
}

export default isAstralAuth(Page);
