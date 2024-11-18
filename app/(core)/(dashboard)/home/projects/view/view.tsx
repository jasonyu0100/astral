'use client';
import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralGestureIcon } from '@/icons/gesture/main';
import { useContext } from 'react';
import { ContextForHomeProjectsModals } from '../modal/controller/main';
import { ContextForHomeProjectsCreateSpace } from '../modal/create-space/controller/main';
import { HomeProjectsTableMain } from './flow/main';

export function HomeProjectsView() {
  const homePersonalModalsController = useContext(ContextForHomeProjectsModals);
  const createSpaceController = useContext(ContextForHomeProjectsCreateSpace);

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <p className='text-5xl font-bold text-slate-300'>Welcome back!</p>
      <div className='flex flex-row space-x-[2rem]'>
        <div
          className='flex h-[50px] w-[350px] cursor-pointer flex-row items-center justify-between rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[1rem] p-[2rem]'
          onClick={() => {
            createSpaceController.actions
              .createBlankSpace()
              .then((spaceObj) => {
                window.location.href = liveMap.live.link(spaceObj.id);
              });
          }}
        >
          <p className='text-xl font-bold text-slate-300'>
            Create from scratch
          </p>
          <AstralGestureIcon className='h-[2rem] w-[2rem]' />
        </div>
        <div
          onClick={() => {
            homePersonalModalsController.createFromSourceController.open();
          }}
          className='flex h-[50px] cursor-pointer flex-row items-center justify-between space-x-[1rem] rounded-full bg-gradient-to-br from-purple-500 to-violet-500 p-[1rem] p-[2rem]'
        >
          <p className='text-xl font-bold text-slate-300'>Create with AI</p>
          <AstralBookSparkIcon className='h-[2rem] w-[2rem]' />
        </div>
      </div>
      {/* <HomeProjectsViewTemplates /> */}
      <div className='flex flex-row items-center space-x-[1rem]'>
        <p className='text-3xl font-bold text-slate-300'>Your projects</p>
      </div>
      <HomeProjectsTableMain />
    </div>
  );
}
