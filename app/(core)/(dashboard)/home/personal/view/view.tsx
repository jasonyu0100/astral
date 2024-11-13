'use client';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralGestureIcon } from '@/icons/gesture/main';
import { useContext } from 'react';
import { ContextForHomePersonalModals } from '../modal/controller/main';
import { ContextForHomePersonalCreateSpace } from '../modal/create-space/controller/main';
import { HomePersonalTableMain } from './flow/main';

export function HomePersonalView() {
  const homePersonalModalsController = useContext(ContextForHomePersonalModals);
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <div className='flex flex-col space-y-[2rem] py-[1rem]'>
        <p className='text-5xl font-bold text-slate-300'>Welcome back!</p>
        <div className='flex flex-row space-x-[2rem]'>
          <div
            className='flex h-[50px] w-[350px] cursor-pointer flex-row items-center justify-between rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[1rem] p-[2rem]'
            onClick={() => {
              createSpaceController.actions
                .createBlankSpace()
                .then((spaceObj) => {
                  window.location.href = spacesMap.spaces.id.space.link(
                    spaceObj.id,
                  );
                });
            }}
          >
            <p className='text-xl font-bold text-slate-300'>
              Create blank space
            </p>
            <AstralGestureIcon className='h-[2rem] w-[2rem]' />
          </div>
          <div
            onClick={() => {
              homePersonalModalsController.createFromSourceController.open();
            }}
            className='flex h-[50px] w-[350px] cursor-pointer flex-row items-center justify-between rounded-full bg-gradient-to-br from-purple-500 to-violet-500 p-[1rem] p-[2rem]'
          >
            <p className='text-xl font-bold text-slate-300'>
              Create custom space
            </p>
            <AstralBookSparkIcon className='h-[2rem] w-[2rem]' />
          </div>
        </div>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <p className='text-3xl font-bold text-slate-300'>Your spaces</p>
        </div>
      </div>
      <HomePersonalTableMain />
    </div>
  );
}
