'use client';
import React from 'react';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { Card } from '@/(components)/(element)/card/main';
import {
  Dice,
  DiceFace,
} from '@/(components)/(element)/dice/main';
import {
  CardSuit,
  CardNumber,
} from '@/(core)/(project)/space/[id]/(pages)/sea/view/main/month/main';

export default function Page() {
  return (
    <GlassWindowFrame className='flex w-full flex-row flex-wrap space-y-[1rem] p-[2rem]'>
      <GlassWindowContents className='flex w-full flex-row flex-wrap space-x-[2rem] space-y-[2rem] p-[2rem]'>
        <Card
          suit={CardSuit.Spades}
          number={CardNumber.Ace}
          className='shadow-glow h-[10rem] animate-pulse-slow'
        />
        <Dice
          face={DiceFace.Six}
          className='shadow-glow h-[10rem] animate-pulse-slow'
        />
        <GlassWindowFrame
          className='shadow-glow aspect-[9/12] h-[10rem] animate-pulse-slow border-[4px] border-black bg-white'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex items-center justify-center'>
            <p className='rotate-90 font-permanentMarker'>world hold on</p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow h-[10rem] w-[10rem] animate-pulse-slow'>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow h-[10rem] w-[10rem] animate-pulse-slow'>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow h-[10rem] w-[10rem]  animate-pulse-slow '>
          <GlassWindowContents className='flex w-full flex-row bg-white'>
            <div className='flex w-[20px] flex-shrink-0 border-r-[1px] border-red-500' />
            <div className='flex w-full flex-col'>
              <div className='flex h-[20px] w-full flex-shrink-0 border-b-[1px] border-cyan-500' />
              <div className='flex h-full flex-col p-[10px]'>
                <p className='font-permanentMarker'>hello world</p>
              </div>
            </div>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow h-[10rem] w-[10rem] animate-pulse-slow bg-yellow-300'>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow h-[10rem] w-[10rem] animate-pulse-slow bg-green-500 '>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow h-[20rem] w-[30rem] animate-pulse-slow rounded-full bg-green-600 '>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow aspect-[5/8] h-[20rem] animate-pulse-slow bg-orange-400 '>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow aspect-[5/8] h-[20rem]  animate-pulse-slow bg-yellow-300 '>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow aspect-[5/8]  h-[20rem] animate-pulse-slow bg-violet-500 '>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame className='shadow-glow aspect-[5/8]  h-[20rem] animate-pulse-slow bg-cyan-400 '>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
        <div className='bg-white p-[2rem]'>
          <GlassWindowFrame className='shadow-glow aspect-[5/8]  h-[20rem] animate-pulse-slow bg-fuchsia-500'>
            <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
          </GlassWindowFrame>
        </div>
        <GlassWindowFrame className='shadow-glow h-[10rem] w-[10rem] animate-pulse-slow  bg-black'>
          <GlassWindowContents className='flex w-full flex-row'></GlassWindowContents>
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
