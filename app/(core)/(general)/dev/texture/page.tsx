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
import { StickyColor, StickySize, StickyTextIdea } from './sticky/main';
import { VerticalCard } from './card/vertical/main';
import { HorizontalCard } from './card/horizontal/main';
import { RecordAudioClosedIdea, RecordAudioIdea } from './record/main';
import { WidePolaroid } from './polaroid/general/main';
import { NormalPolaroid } from './polaroid/wide/main';

export default function Page() {
  return (
    <div
      className='flex w-full flex-row flex-wrap p-[2rem]'
      style={{ zoom: 0.75 }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[2rem] p-[2rem]'>
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
        </div>{' '}
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Text Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <VerticalCard />
            <div className='relative flex flex-row'>
              <VerticalCard className='absolute left-[0rem]' />
              <VerticalCard className='absolute left-[2rem]' />
              <VerticalCard className='absolute left-[4rem]' />
              <VerticalCard className='absolute left-[6rem]' />
            </div>
          </div>
          <div className='flex flex-row space-x-[1rem]'>
            <HorizontalCard />
            <div className='relative flex flex-row'>
              <HorizontalCard className='absolute left-[0rem]' />
              <HorizontalCard className='absolute left-[2rem]' />
              <HorizontalCard className='absolute left-[4rem]' />
              <HorizontalCard className='absolute left-[6rem]' />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Audio Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <RecordAudioIdea />

            <div className='relative flex flex-row'>
              <RecordAudioClosedIdea className='absolute left-[0rem]' />
              <RecordAudioClosedIdea className='absolute left-[2rem]' />
              <RecordAudioClosedIdea className='absolute left-[4rem]' />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Image Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <WidePolaroid />
            <div className='relative flex flex-row'>
              <WidePolaroid className='absolute left-[0rem]' />
              <WidePolaroid className='absolute left-[2rem]' />
              <WidePolaroid className='absolute left-[4rem]' />
            </div>
          </div>
          <div className='flex flex-row space-x-[1rem]'>
            <NormalPolaroid />
            <div className='relative flex flex-row'>
              <NormalPolaroid className='absolute left-[0rem]' />
              <NormalPolaroid className='absolute left-[2rem]' />
              <NormalPolaroid className='absolute left-[4rem]' />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Video Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <VideoHorizontal />
            <div className='relative flex flex-row'>
              <VideoHorizontal className='absolute left-[0rem]' />
              <VideoHorizontal className='absolute left-[2rem]' />
              <VideoHorizontal className='absolute left-[4rem]' />
            </div>
          </div>
          <div className='flex flex-row space-x-[1rem]'>
            <VideoVertical />
            <div className='relative flex flex-row'>
              <VideoVertical className='absolute left-[0rem]' />
              <VideoVertical className='absolute left-[2rem]' />
              <VideoVertical className='absolute left-[4rem]' />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Color Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <GlassWindowFrame
              className='w-[30rem] animate-pulse-slow border-[1px]  border-white bg-white shadow-glow'
              roundedFx={roundedFx['rounded-l']}
            >
              <GlassWindowContents className='flex w-full flex-row pr-[2rem]'>
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
                className='absolute left-[0rem] h-[20rem]  shadow-glow'
              />
              <Card
                suit={CardSuit.Spades}
                number={CardNumber.Ace}
                className='absolute left-[2rem] h-[20rem] shadow-glow'
              />
              <Card
                suit={CardSuit.Spades}
                number={CardNumber.Ace}
                className='absolute left-[4rem] h-[20rem] shadow-glow'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
