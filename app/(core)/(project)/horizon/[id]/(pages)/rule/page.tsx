'use client';

import isVerseAuth from '@/(utils)/isAuth';
import { RuleView } from './view/view';
import { RuleSidebar } from './view/sidebar/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { Seperator } from '@/(components)/(line)/seperator/main';
import { ChaptersContainer } from './chapters/main';
import { ChaptersRowContainer } from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/main';
import { ChaptersLeft } from './chapters/left/main';
import { ChaptersRight } from './chapters/right/main';
import { ChapterContainer } from './chapters/row/chapter/main';

function DecisionMatrix() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-around']}
          className='h-[5rem] w-[5rem]'
        >
          <GlassWindowContents className='flex flex-row'>
            <p className='text-slate-500'>2/2</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-around']}
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
          borderFx={borderFx['border-around']}
          className='h-[5rem] w-[5rem]'
        >
          <GlassWindowContents className='flex flex-row'>
            <p className='text-slate-500'>0/2</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          name='temp'
          borderFx={borderFx['border-around']}
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
      <RuleView>
        <RuleSidebar />
        <div className='flex h-full w-full flex-col'>
          <div className='w-full overflow-auto' style={{height: '100%'}}>

          <div className='flex flex-col p-[2rem]'>
            <p className='text-bold text-slate-500'>Decision Matrix</p>
            <DecisionMatrix />
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
                <Seperator />
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx['rounded-full']}
                  className='h-[5rem] w-[5rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-5']} />
                </GlassWindowFrame>
                <Seperator />
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
                <Seperator />
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx['rounded-full']}
                  className='h-[5rem] w-[5rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-10']} />
                </GlassWindowFrame>
                <Seperator />
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
                <Seperator />
                <GlassWindowFrame
                  name='temp'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx['rounded-full']}
                  className='h-[5rem] w-[5rem]'
                >
                  <GlassWindowContents className='flex flex-row'></GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-5']} />
                </GlassWindowFrame>
                <Seperator />
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
          <ChaptersContainer>
            <ChaptersLeft />
            <ChaptersRowContainer>
              <ChapterContainer index={1} >A. Formal</ChapterContainer>
              <ChapterContainer index={1} >B. Casual</ChapterContainer>
              <ChapterContainer index={1} >C. Smart Casual</ChapterContainer>
            </ChaptersRowContainer>
            <ChaptersRight />
          </ChaptersContainer>
        </div>
      </RuleView>
    </>
  );
}

export default isVerseAuth(Page);
