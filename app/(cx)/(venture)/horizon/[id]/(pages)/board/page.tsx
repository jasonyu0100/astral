'use client';

import insideVerse from '@/(lgx)/utils/isAuth';
import { ArcView } from './view';
import { ArcSidebar } from './(arc-epic)/sidebar/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { Divider } from '@/(lib)/(line)/divider/main';
import { Seperator } from '@/(lib)/(line)/seperator/main';
import { ChaptersContainer } from './chapters/main';
import { ChaptersRowContainer } from '@/(cx)/(studio)/space/[id]/(process-stages)/(common)/chapters/row/main';
import { ChaptersLeft } from './chapters/left/main';
import { ChaptersRight } from './chapters/right/main';
import { ChapterContainer } from './chapters/row/chapter/main';

function Page() {
  return (
    <>
      <ArcView>
        <div className='flex h-full w-full flex-col'>
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
          </div>
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
        <ArcSidebar />
      </ArcView>
    </>
  );
}

export default insideVerse(Page);
