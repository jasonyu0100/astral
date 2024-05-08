'use client';

import insideVerse from '@/(utils)/isAuth';
import { DualView } from './view';
import { DualSidebar } from './(dual-epic)/sidebar/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { Seperator } from '@/(components)/(line)/seperator/main';
import { ChaptersContainer } from './chapters/main';
import { ChaptersRowContainer } from '@/(core)/(studio)/space/[id]/(pages)/(common)/chapters/row/main';
import { ChaptersLeft } from './chapters/left/main';
import { ChaptersRight } from './chapters/right/main';
import { ChapterContainer } from './chapters/row/chapter/main';

function DecisionMatrix() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-all']}
          className='h-[5rem] w-[5rem]'
        >
          <GlassWindowContents className='flex flex-row'>
            <p className='text-slate-500'>2/2</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-all']}
          className='h-[5rem] w-[5rem]'
        >
          <GlassWindowContents className='flex flex-row'>
            <p className='text-slate-500'>2/0</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
      <div className='flex flex-row'>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-all']}
          className='h-[5rem] w-[5rem]'
        >
          <GlassWindowContents className='flex flex-row'>
            <p className='text-slate-500'>0/2</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-all']}
          className='h-[5rem] w-[5rem]'
        >
          <GlassWindowContents className='flex flex-row'>
            <p className='text-slate-500'>0/0</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <DualView>
        <div className='flex h-full w-full flex-col'>
          <p className='text-bold text-slate-500'>Decision Matrix</p>
          <DecisionMatrix />
          <p className='text-bold text-slate-500'>Decision Making</p>
          <div className='flex w-full flex-row space-x-[2rem] p-[2rem]'>
            <GlassWindowFrame
              name='temp'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx.rounded}
              className='h-[2rem] w-[10rem]'
            >
              <GlassWindowContents className='flex flex-row'></GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              name='temp'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx.rounded}
              className='h-[2rem] w-[10rem]'
            >
              <GlassWindowContents className='flex flex-row'></GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              name='temp'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx.rounded}
              className='h-[2rem] w-[10rem]'
            >
              <GlassWindowContents className='flex flex-row'></GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              name='temp'
              borderFx={borderFx['border-all']}
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
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
              <Seperator />
              <GlassWindowFrame
                name='temp'
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
              <Seperator />
              <GlassWindowFrame
                name='temp'
                borderFx={borderFx['border-all']}
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
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
              <Seperator />
              <GlassWindowFrame
                name='temp'
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
              <Seperator />
              <GlassWindowFrame
                name='temp'
                borderFx={borderFx['border-all']}
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
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
              <Seperator />
              <GlassWindowFrame
                name='temp'
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
              <Seperator />
              <GlassWindowFrame
                name='temp'
                borderFx={borderFx['border-all']}
                roundedFx={roundedFx['rounded-full']}
                className='h-[5rem] w-[5rem]'
              >
                <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
            </div>
          </div>
          <ChaptersContainer>
            <ChaptersLeft />
            <ChaptersRowContainer>
              <ChapterContainer index={1} />
              <ChapterContainer index={1} />
              <ChapterContainer index={1} />
            </ChaptersRowContainer>
            <ChaptersRight />
          </ChaptersContainer>
        </div>
        <DualSidebar />
      </DualView>
    </>
  );
}

export default insideVerse(Page);
