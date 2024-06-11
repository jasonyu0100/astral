'use client';
import React from 'react';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { Card } from '@/(components)/(element)/card/main';
import { Dice, DiceFace } from '@/(components)/(element)/dice/main';
import {
  CardSuit,
  CardNumber,
} from '@/(core)/(project)/space/[id]/(pages)/sea/view/main/month/main';
import { VideoCircle } from './video/circle/main';
import { VideoHorizontal } from './video/wide/main';
import { VideoVertical } from './video/vertical/main';
import { TimeNumberIdea } from './time/main';
import { StickyColor, StickyTextIdea } from './sticky/main';

export default function Page() {
  return (
    <div style={{ zoom: 0.5 }}>
      <GlassWindowFrame className='flex w-full flex-row flex-wrap p-[2rem]'>
        <GlassWindowContents className='flex w-full flex-row flex-wrap gap-[2rem] p-[2rem]'>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Card</p>
            <div className='flex flex-row space-x-[1rem]'>
              {' '}
              <GlassWindowFrame
                className='aspect-[9/12] h-[20rem] animate-pulse-slow border-[4px] border-black bg-white shadow-glow'
                roundedFx={roundedFx.rounded}
              >
                <GlassWindowContents className='flex items-center justify-center'>
                  <p className='font-bold'>world hold on</p>
                </GlassWindowContents>
              </GlassWindowFrame>
              <GlassWindowFrame
                roundedFx={roundedFx.rounded}
                className='aspect-[12/9] h-[15rem] animate-pulse-slow bg-white p-[1rem] shadow-glow'
              >
                <GlassWindowContents>
                  <p className='font-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </GlassWindowContents>
              </GlassWindowFrame>
              <GlassWindowFrame
                roundedFx={roundedFx.rounded}
                className='aspect-[12/9] h-[15rem] animate-pulse-slow bg-white p-[1rem] shadow-glow'
              >
                <GlassWindowContents>
                  <p className='font-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </GlassWindowContents>
              </GlassWindowFrame>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Game</p>
            <div className='flex flex-row space-x-[1rem]'>
              <Dice
                face={DiceFace.Six}
                className='h-[20rem] animate-pulse-slow shadow-glow'
              />{' '}
              <Card
                suit={CardSuit.Spades}
                number={CardNumber.Ace}
                className='h-[20rem] animate-pulse-slow shadow-glow'
              />
              <div className='relative flex h-[20rem] w-[20rem] flex-row'>
                <Card
                  suit={CardSuit.Spades}
                  number={CardNumber.Ace}
                  className='absolute left-[1rem] h-[20rem] animate-pulse-slow shadow-glow'
                />
                <Card
                  suit={CardSuit.Spades}
                  number={CardNumber.Ace}
                  className='absolute left-[3rem] h-[20rem] animate-pulse-slow shadow-glow'
                />
                <Card
                  suit={CardSuit.Spades}
                  number={CardNumber.Ace}
                  className='absolute left-[5rem] h-[20rem] animate-pulse-slow shadow-glow'
                />
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Time</p>
            <div className='flex flex-row space-x-[1rem]'>
              <TimeNumberIdea/>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Sticky</p>
            <div className='flex flex-row space-x-[1rem]'>
              <StickyTextIdea color={StickyColor.BLACK}>Hello World</StickyTextIdea>
              <StickyTextIdea color={StickyColor.BLUE}>Hello World</StickyTextIdea>
              <StickyTextIdea color={StickyColor.YELLOW}>Hello World</StickyTextIdea>
              <StickyTextIdea color={StickyColor.PINK}>Hello World</StickyTextIdea>
              <StickyTextIdea color={StickyColor.PURPLE}>Hello World</StickyTextIdea>
              <StickyTextIdea color={StickyColor.WHITE}>Hello World</StickyTextIdea>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Audio</p>
            <div className='flex flex-row space-x-[1rem]'>
              <GlassWindowFrame className='h-[20rem] animate-pulse-slow'>
                <GlassWindowContents className='absolute flex h-full flex-row'>
                  <img
                    className='relative z-50 aspect-square h-full flex-shrink-0 object-contain'
                    src='https://www.udiscovermusic.com/wp-content/uploads/2022/03/janelle-monae-dirty-computer.jpg'
                  />
                  <img
                    src='/graphic/record.png'
                    className='relative right-[5rem] z-0 aspect-square h-full flex-shrink-0 animate-spin p-[1rem]'
                  />
                </GlassWindowContents>
              </GlassWindowFrame>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Images</p>
            <div className='flex flex-row space-x-[1rem]'>
              <GlassWindowFrame className='aspect-[16/13] h-[20rem]  animate-pulse-slow bg-white p-[1rem] pb-[3rem]  shadow-glow'>
                <GlassWindowContents className='flex w-full flex-col'>
                  <div className='w-full overflow-hidden bg-black'>
                    <img
                      className='h-full w-full object-fill'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                  </div>
                </GlassWindowContents>
              </GlassWindowFrame>
              <GlassWindowFrame className='aspect-[13/16] h-[20rem]  animate-pulse-slow bg-white p-[1rem] shadow-glow'>
                <GlassWindowContents className='flex w-full flex-col'>
                  <div className='aspect-square w-full overflow-hidden bg-black'>
                    <img
                      className='h-full w-full object-fill'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                  </div>
                </GlassWindowContents>
              </GlassWindowFrame>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Videos</p>
            <div className='flex flex-row space-x-[1rem]'>
              <VideoCircle />
              <VideoHorizontal />
              <VideoVertical />
            </div>
          </div>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Colors</p>
            <div className='flex flex-row space-x-[1rem]'>
              <GlassWindowFrame
                className='w-[10rem] animate-pulse-slow bg-white  shadow-glow'
                roundedFx={roundedFx['rounded-t']}
              >
                <GlassWindowContents className='flex w-full flex-col space-y-[1rem] pb-[2rem]'>
                  <div className='flex aspect-square w-full items-end justify-end bg-green-500 p-[1rem]'>
                    <div className='flex w-full flex-row justify-between'>
                      <p className='font-bold text-white text-opacity-80'>
                        #ffffff
                      </p>
                    </div>
                  </div>
                  <div className='flex aspect-square w-full items-end justify-end bg-orange-500 p-[1rem]'>
                    <div className='flex w-full flex-row justify-between'>
                      <p className='font-bold text-white text-opacity-80'>
                        #ffffff
                      </p>
                    </div>
                  </div>
                  <div className='flex aspect-square w-full items-end justify-end bg-purple-500 p-[1rem]'>
                    <div className='flex w-full flex-row justify-between'>
                      <p className='font-bold text-white text-opacity-80'>
                        #ffffff
                      </p>
                    </div>
                  </div>
                </GlassWindowContents>
              </GlassWindowFrame>
            </div>
          </div>{' '}
          <div className='flex w-full flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-white'>Label</p>
            <div className='flex flex-row space-x-[1rem]'>
              <GlassWindowFrame className='aspect-[12/9] h-[20rem] animate-pulse-slow bg-white  shadow-glow'>
                <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
                  <p className='font-bold'>Jason Yu</p>
                  <p className='font-light'>My Sample Art</p>
                  <p className='font-light'>A collection of work</p>
                </GlassWindowContents>
              </GlassWindowFrame>
            </div>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
