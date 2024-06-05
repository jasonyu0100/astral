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

export default function Page() {
  return (
    <GlassWindowFrame className='flex w-full flex-row flex-wrap p-[2rem]'>
      <GlassWindowContents className='flex w-full flex-row flex-wrap gap-[2rem] p-[2rem]'>
        <Card
          suit={CardSuit.Spades}
          number={CardNumber.Ace}
          className='h-[20rem] animate-pulse-slow shadow-glow'
        />
        <GlassWindowFrame
          className='aspect-[9/12] h-[20rem] animate-pulse-slow border-[4px] border-black bg-white shadow-glow'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex items-center justify-center'>
            <p className='font-bold'>world hold on</p>
          </GlassWindowContents>
        </GlassWindowFrame>

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
        <GlassWindowFrame
          roundedFx={roundedFx.rounded}
          className='aspect-[12/9] h-[15rem] animate-pulse-slow bg-white p-[1rem] shadow-glow'
        >
          <GlassWindowContents>
            <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame
          roundedFx={roundedFx.rounded}
          className='aspect-[12/9] h-[15rem] animate-pulse-slow bg-white p-[1rem] shadow-glow'
        >
          <GlassWindowContents>
            <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame
          roundedFx={roundedFx.rounded}
          className='aspect-[12/9] h-[15rem] animate-pulse-slow bg-white p-[1rem] shadow-glow'
        >
          <GlassWindowContents>
            <p className='font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <Dice
          face={DiceFace.Six}
          className='h-[20rem] animate-pulse-slow shadow-glow'
        />
        <Dice
          face={DiceFace.Six}
          className='h-[20rem] animate-pulse-slow shadow-glow'
        />
        <Dice
          face={DiceFace.Six}
          className='h-[20rem] animate-pulse-slow shadow-glow'
        />
        <div className='relative flex flex-col h-[20rem] w-[20rem]'>
          <GlassWindowFrame className='absolute left-[1rem] top-[0rem] h-[10rem] w-[10rem] animate-pulse-slow bg-yellow-300 shadow-md'>
            <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
              <p className='font-light'>hello world</p>
            </GlassWindowContents>
          </GlassWindowFrame>
            <GlassWindowFrame className='absolute left-[2rem] top-[0rem] h-[10rem] w-[10rem] animate-pulse-slow bg-yellow-300 shadow-md'>
              <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
                <p className='font-light'>hello world</p>
              </GlassWindowContents>
            </GlassWindowFrame>
            <GlassWindowFrame className='absolute left-[3rem] top-[0rem] h-[10rem] w-[10rem] animate-pulse-slow bg-yellow-300 shadow-md'>
              <GlassWindowContents className='flex w-full flex-col p-[1rem] '>
                <p className='font-light'>hello world</p>
              </GlassWindowContents>
            </GlassWindowFrame>
        </div>
        <GlassWindowFrame className='h-[10rem] w-[10rem] animate-pulse-slow bg-yellow-300 shadow-glow'>
          <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
            <p className='font-light'>hello world</p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='h-[10rem] w-[10rem] animate-pulse-slow bg-green-500 shadow-glow '>
          <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
            <p className='font-light'>hello world</p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='h-[10rem] w-[10rem] animate-pulse-slow bg-purple-500 shadow-glow '>
          <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
            <p className='font-light'>hello world</p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='aspect-[13/16] h-[20rem]  animate-pulse-slow bg-white p-[2rem] shadow-glow'>
          <GlassWindowContents className='flex w-full flex-col'>
            <div className='aspect-square w-full overflow-hidden bg-black'>
              <img
                className='h-full w-full object-fill'
                src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
          </GlassWindowContents>
        </GlassWindowFrame>
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
        <GlassWindowFrame className='aspect-square h-[20rem] animate-pulse-slow shadow-glow'>
          <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center p-[1rem]'>
            <p className='text-2xl font-bold text-white'>20:38</p>
            <p className='text-md font-bold text-white'>4/06/24</p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame
          className='aspect-[12/9] h-[20rem] animate-pulse-slow shadow-glow'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex w-full flex-row'>
            <iframe
              onDrag={(e) => e.stopPropagation()}
              className='object-contain'
              style={{ width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/ABfT0jtWULM?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
              title='YouTube video player'
            />
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame
          className='aspect-[9/12] h-[22rem] animate-pulse-slow shadow-glow'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex w-full flex-row'>
            <iframe
              onDrag={(e) => e.stopPropagation()}
              className='object-contain'
              style={{ width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/ABfT0jtWULM?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
              title='YouTube video player'
            />
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='aspect-square h-[20rem] animate-pulse-slow overflow-hidden  rounded-full bg-black shadow-glow'>
          <GlassWindowContents className='flex w-full flex-row items-center justify-center p-[1rem]'>
            <iframe
              onDrag={(e) => e.stopPropagation()}
              className='overflow-hidden   rounded-full object-contain'
              style={{ width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/ABfT0jtWULM`}
              title='YouTube video player'
            />
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame
          className='w-[10rem] animate-pulse-slow bg-white  shadow-glow'
          roundedFx={roundedFx['rounded-t']}
        >
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem] pb-[2rem]'>
            <div className='flex aspect-square w-full items-end justify-end bg-green-500 p-[1rem]'>
              <div className='flex w-full flex-row justify-between'>
                <p className='font-bold text-white text-opacity-80'>#ffffff</p>
              </div>
            </div>
            <div className='flex aspect-square w-full items-end justify-end bg-orange-500 p-[1rem]'>
              <div className='flex w-full flex-row justify-between'>
                <p className='font-bold text-white text-opacity-80'>#ffffff</p>
              </div>
            </div>
            <div className='flex aspect-square w-full items-end justify-end bg-purple-500 p-[1rem]'>
              <div className='flex w-full flex-row justify-between'>
                <p className='font-bold text-white text-opacity-80'>#ffffff</p>
              </div>
            </div>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='aspect-[12/9] h-[20rem] animate-pulse-slow bg-white  shadow-glow'>
          <GlassWindowContents className='flex w-full flex-col p-[1rem]'>
            <p className='font-bold'>Jason Yu</p>
            <p className='font-light'>My Sample Art</p>
            <p className='font-light'>A collection of work</p>
          </GlassWindowContents>
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
