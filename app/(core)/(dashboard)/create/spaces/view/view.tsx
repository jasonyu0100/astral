'use client';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralGestureIcon } from '@/icons/gesture/main';
import { useContext } from 'react';
import { ContextForCreateSpacesModals } from '../modal/controller/main';
import { ContextForCreateSpacesCreateSpace } from '../modal/create-space/controller/main';
import { CreateSpacesTableMain } from './flow/main';

export function CreateSpacesView() {
  const homePersonalModalsController = useContext(ContextForCreateSpacesModals);
  const createSpaceController = useContext(ContextForCreateSpacesCreateSpace);

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
                  window.location.href = spacesMap.spaces.id.ideas.link(
                    spaceObj.id,
                  );
                });
            }}
          >
            <p className='text-xl font-bold text-slate-300'>Create a space</p>
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
        <HorizontalDivider />
        {/* <GlassWindowFrame>
          <GlassWindowContents className='flex flex-col space-y-[2rem]'>
            <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
              {Object.entries(SpaceTemplateMap).map(([template, obj]) => (
                <GlassWindowFrame
                  className='aspect-[3/2] h-[200px] flex-shrink-0 p-[1rem]'
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                >
                  <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                    <div className='flex flex-row items-center space-x-[1rem]'>
                      <div
                        className='flex h-[2.5rem] w-[2.5rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
                        onClick={() => {
                          createSpaceController.actions.updateCategory(
                            template as SpaceTemplate,
                          );
                          homePersonalModalsController.createSpaceController.open();
                        }}
                      >
                        <AstralAddIcon />
                      </div>
                      <p className='text-xl font-bold text-slate-300'>
                        {obj?.title}
                      </p>
                    </div>
                    <p className='text-sm font-light text-slate-300'>
                      {obj?.description}
                    </p>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-5']} />
                </GlassWindowFrame>
              ))}
            </div>
          </GlassWindowContents>
        </GlassWindowFrame> */}
        <div className='flex flex-row items-center space-x-[1rem]'>
          <p className='text-3xl font-bold text-slate-300'>Your spaces</p>
        </div>
      </div>
      <CreateSpacesTableMain />
    </div>
  );
}
