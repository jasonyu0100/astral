'use client';

import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalSeperator } from '@/(components)/(line)/seperator/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import isVerseAuth from '@/(utils)/isAuth';
import { HorizonStoryView } from './view/main';
import { HorizonStorySidebar } from './view/sidebar/main';

function Page() {
  return (
    <>
      <HorizonStoryView>
        <div className='flex h-full w-full flex-col'>
          <GlassWindowFrame name='temp' className='h-[4rem] w-full'>
            <GlassWindowContents className='flex flex-row'></GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <div className='w-full overflow-auto' style={{ height: '100%' }}>
            <div className='flex flex-col p-[2rem]'>
              <p className='text-bold text-slate-500'>Decision Making</p>
              <div className='flex w-full flex-row space-x-[2rem] p-[2rem]'>
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx.rounded}
                  className='h-[2rem] w-[10rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-10']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx.rounded}
                  className='h-[2rem] w-[10rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-10']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx.rounded}
                  className='h-[2rem] w-[10rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-10']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx.rounded}
                  className='h-[2rem] w-[10rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-10']} />
                </GlassWindowFrame>
              </div>
              <p className='text-bold text-slate-500'>Candidate Notes</p>
              <div className='flex h-full w-full flex-col space-y-[1rem] p-[2rem]'>
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                  <HorizontalSeperator />
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <HorizontalSeperator />
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                </div>{' '}
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <HorizontalSeperator />
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                  <HorizontalSeperator />
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                </div>{' '}
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                  <HorizontalSeperator />
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <HorizontalSeperator />
                  <GlassWindowFrame
                    name='temp'
                    borderFx={borderFx['border-around']}
                    roundedFx={roundedFx['rounded-full']}
                    className='h-[5rem] w-[5rem]'
                  >
                    <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-10']} />
                  </GlassWindowFrame>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HorizonStorySidebar />
      </HorizonStoryView>
    </>
  );
}

export default isVerseAuth(Page);
