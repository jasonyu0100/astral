'use client';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralGestureIcon } from '@/icons/gesture/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { SpaceTemplate, SpaceTemplateMap } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomePersonalModals } from '../modal/controller/main';
import { ContextForHomePersonalCreateSpace } from '../modal/create-space/controller/main';
import { HomePersonalContainer } from './container/main';
import { HomePersonalTable } from './table/main';

export function HomePersonalView() {
  const spacesPersonalModalsController = useContext(
    ContextForHomePersonalModals,
  );
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);
  const spaceListController = useContext(ContextForSpaceList);

  return (
    <>
      <div className='flex flex-col space-y-[2rem] py-[2rem]'>
        <p className='text-5xl font-bold text-slate-300'>Welcome back!</p>
        <div className='flex flex-row space-x-[2rem]'>
          <div
            className='flex h-[50px] w-[350px] cursor-pointer flex-row items-center justify-between rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[1rem] p-[2rem]'
            onClick={() => {
              createSpaceController.pageOne.updateCategory(SpaceTemplate.Blank);
              spacesPersonalModalsController.createSpaceController.open();
            }}
          >
            <p className='text-xl font-bold text-slate-300'>
              Create a freeform space
            </p>
            <AstralGestureIcon className='h-[2rem] w-[2rem]' />
          </div>
          <div
            onClick={() => {
              alert('coming soon...');
            }}
            className='flex h-[50px] w-[350px] cursor-pointer flex-row items-center justify-between rounded-full bg-gradient-to-br from-purple-500 to-violet-500 p-[1rem] p-[2rem]'
          >
            <p className='text-xl font-bold text-slate-300'>
              Create from source
            </p>
            <AstralBookSparkIcon className='h-[2rem] w-[2rem]' />
          </div>
        </div>
        <GlassWindowFrame
          className='p-[2rem]'
          roundedFx={roundedFx['rounded']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex flex-col space-y-[2rem]'>
            <p className='text-2xl font-bold text-slate-300'>
              Get started from a template
            </p>
            <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
              {Object.entries(SpaceTemplateMap).map(([template, obj]) => (
                <GlassWindowFrame
                  className='aspect-[3/2] h-[200px] flex-shrink-0 p-[1rem]'
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                >
                  <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                    <div className='flex flex-row items-center justify-between'>
                      <p className='text-xl font-bold text-slate-300'>
                        {obj?.title}
                      </p>
                      <div
                        className='flex h-[2.5rem] w-[2.5rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
                        onClick={() => {
                          createSpaceController.pageOne.updateCategory(
                            template as SpaceTemplate,
                          );
                          spacesPersonalModalsController.createSpaceController.open();
                        }}
                      >
                        <AstralPlayIcon />
                      </div>
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
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <p className='text-3xl font-bold text-slate-300'>Your spaces</p>
        </div>
      </div>
      <HomePersonalContainer>
        <HomePersonalTable />
      </HomePersonalContainer>
    </>
  );
}
