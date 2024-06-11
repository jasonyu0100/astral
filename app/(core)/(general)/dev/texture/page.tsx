'use client';
import React from 'react';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { Card } from '@/(components)/(idea)/game/card/main';
import { Dice, DiceFace } from '@/(components)/(idea)/game/dice/main';
import {
  CardSuit,
  CardNumber,
} from '@/(core)/(project)/space/[id]/(pages)/sea/view/main/month/main';
import {
  ScreenVideoIdea,
  ScreenVideoIdeaSize,
} from '../../../../(components)/(idea)/(video)/screen/main';
import {
  StickyNoteColor,
  StickyNoteSize,
  StickyNoteTextIdea,
} from '../../../../(components)/(idea)/(text)/sticky/main';
import {
  CardTextIdea,
  CardTextIdeaSize,
} from '../../../../(components)/(idea)/(text)/card/main';
import {
  VinylAudioClosedIdea,
  VinylAudioIdea,
} from '../../../../(components)/(idea)/(audio)/vinyl/main';
import {
  PolaroidImageIdea,
  PolaroidImageIdeaSize,
} from '../../../../(components)/(idea)/(image)/polaroid/main';
import { Colors } from '@/(components)/(idea)/colors/main';

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
            <CardTextIdea size={CardTextIdeaSize.NORMAL} />
            <div className='relative flex flex-row'>
              <CardTextIdea
                size={CardTextIdeaSize.WIDE}
                className='absolute left-[0rem]'
              />
              <CardTextIdea
                size={CardTextIdeaSize.WIDE}
                className='absolute left-[2rem]'
              />
              <CardTextIdea
                size={CardTextIdeaSize.WIDE}
                className='absolute left-[4rem]'
              />
              <CardTextIdea
                size={CardTextIdeaSize.WIDE}
                className='absolute left-[6rem]'
              />
            </div>
          </div>
          <div className='flex flex-row space-x-[1rem]'>
            <CardTextIdea size={CardTextIdeaSize.NORMAL} />
            <div className='relative flex flex-row'>
              <CardTextIdea
                size={CardTextIdeaSize.NORMAL}
                className='absolute left-[0rem]'
              />
              <CardTextIdea
                size={CardTextIdeaSize.NORMAL}
                className='absolute left-[2rem]'
              />
              <CardTextIdea
                size={CardTextIdeaSize.NORMAL}
                className='absolute left-[4rem]'
              />
              <CardTextIdea
                size={CardTextIdeaSize.NORMAL}
                className='absolute left-[6rem]'
              />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Audio Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <VinylAudioIdea />

            <div className='relative flex flex-row'>
              <VinylAudioClosedIdea className='absolute left-[0rem]' />
              <VinylAudioClosedIdea className='absolute left-[2rem]' />
              <VinylAudioClosedIdea className='absolute left-[4rem]' />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Image Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <PolaroidImageIdea size={PolaroidImageIdeaSize.Normal} />
            <div className='relative flex flex-row'>
              <PolaroidImageIdea
                size={PolaroidImageIdeaSize.Normal}
                className='absolute left-[0rem]'
              />
              <PolaroidImageIdea
                size={PolaroidImageIdeaSize.Normal}
                className='absolute left-[2rem]'
              />
              <PolaroidImageIdea
                size={PolaroidImageIdeaSize.Normal}
                className='absolute left-[4rem]'
              />
            </div>
          </div>
          <div className='flex flex-row space-x-[1rem]'>
            <PolaroidImageIdea size={PolaroidImageIdeaSize.Wide} />
            <div className='relative flex flex-row'>
              <PolaroidImageIdea
                size={PolaroidImageIdeaSize.Wide}
                className='absolute left-[0rem]'
              />
              <PolaroidImageIdea
                size={PolaroidImageIdeaSize.Wide}
                className='absolute left-[2rem]'
              />
              <PolaroidImageIdea
                size={PolaroidImageIdeaSize.Wide}
                className='absolute left-[4rem]'
              />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Video Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <ScreenVideoIdea size={ScreenVideoIdeaSize.WIDE} />
            <div className='relative flex flex-row'>
              <ScreenVideoIdea
                size={ScreenVideoIdeaSize.WIDE}
                className='absolute left-[0rem]'
              />
              <ScreenVideoIdea
                size={ScreenVideoIdeaSize.WIDE}
                className='absolute left-[2rem]'
              />
              <ScreenVideoIdea
                size={ScreenVideoIdeaSize.WIDE}
                className='absolute left-[4rem]'
              />
            </div>
          </div>
          <div className='flex flex-row space-x-[1rem]'>
            <ScreenVideoIdea size={ScreenVideoIdeaSize.VERTICAL} />
            <div className='relative flex flex-row'>
              <ScreenVideoIdea
                size={ScreenVideoIdeaSize.VERTICAL}
                className='absolute left-[0rem]'
              />
              <ScreenVideoIdea
                size={ScreenVideoIdeaSize.VERTICAL}
                className='absolute left-[2rem]'
              />
              <ScreenVideoIdea
                size={ScreenVideoIdeaSize.VERTICAL}
                className='absolute left-[4rem]'
              />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Color Ideas</p>
          <div className='flex flex-row space-x-[1rem]'>
            <Colors />
          </div>
        </div>{' '}
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-3xl font-bold text-white'>Game</p>
          <div className='flex flex-row space-x-[1rem]'>
            <Dice
              face={DiceFace.Six}
              className='h-[20rem] animate-pulse-slow shadow-glow'
            />
            <Card
              suit={CardSuit.Spades}
              number={CardNumber.Ace}
              className='h-[20rem] animate-pulse-slow shadow-glow'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
