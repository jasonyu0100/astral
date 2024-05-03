'use client';

import insideVerse from '@/(lgx)/utils/isAuth';
import { PointView } from './view';
import { RankSidebar } from './(point-epic)/sidebar/main';
import { ProfileCover } from '@/(lib)/(element)/profile/main';
import { exampleFile } from '@/(lgx)/internal/model/resource/file/main';
import { Divider } from '@/(lib)/(line)/divider/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { glassFx } from '@/(fx)/data';

function Page() {
  return (
    <>
      <PointView>
        <div className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[2rem]'>
          <h1 className='text-lg font-bold text-slate-300'>State - Hiatus</h1>
          <h1 className='text-lg font-bold text-slate-300'>State - Normal</h1>
          <h1 className='text-lg font-bold text-slate-300'>
            State - In progress
          </h1>
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
              State - In progress
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
                src='https://www.nvidia.com/content/dam/en-zz/Solutions/research/ai-playground/nvidia-picasso-3c33-p@2x.jpg'
                className='h-full object-contain'
              />
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
            <button className='bg-white p-[1rem] text-black'>
              Create Contest
            </button>
          </div>
        </div>
        <RankSidebar />
      </PointView>
    </>
  );
}

export default insideVerse(Page);
