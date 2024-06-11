import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import {
  exampleFileElem,
  exampleFileElems,
} from '@/(server)/(model)/elements/file/main';
import { JournalEntry } from './entry/main';
import { JournalPip } from './pip/main';
import { JournalRecord } from './record/main';
import { JournalMainFooter } from './footer/main';
import {
  StickyTextIdea,
  StickyColor,
} from '@/(core)/(general)/dev/texture/sticky/main';
import { Card } from '@/(components)/(element)/card/main';
import { TimeNumberIdea } from '@/(core)/(general)/dev/texture/time/main';
import { CardSuit, CardNumber } from '@/(core)/(project)/space/[id]/(pages)/sea/view/main/month/main';
import { VideoCircle } from '@/(core)/(general)/dev/texture/video/circle/main';
import { VideoVertical } from '@/(core)/(general)/dev/texture/video/vertical/main';
import { VideoHorizontal } from '@/(core)/(general)/dev/texture/video/wide/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';

export function JournalMain() {
  return (
    <GlassAreaContainer
      name={JournalMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col overflow-hidden'
    >
      <div className='h-full flex-grow overflow-auto'>
        <div className='flex flex-grow flex-col items-center space-y-[2rem] p-[2rem]'>
          {/* <JournalEntry /> */}
            <p className='text-white font-bold text-3xl'>
              Friday, 11 June
            </p>
          <HorizontalDivider/>
          {/* <div className='bg-white p-[1rem] w-1/2'>
            <p className='text-black font-bold text-3xl'>
              11/06
            </p>
            <p className='text-black font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div> */}
          <div className='flex flex-row flex-wrap w-full items-center justify-center gap-[3rem]'>
              <VideoCircle />
              <VideoHorizontal />
              <VideoVertical />
            <StickyTextIdea color={StickyColor.BLACK}>
              Hello World
            </StickyTextIdea>
            <StickyTextIdea color={StickyColor.BLUE}>
              Hello World
            </StickyTextIdea>
            <StickyTextIdea color={StickyColor.YELLOW}>
              Hello World
            </StickyTextIdea>
              <TimeNumberIdea/>
                <Card
                  suit={CardSuit.Spades}
                  number={CardNumber.Ace}
                  className='h-[20rem] animate-pulse-slow shadow-glow'
                />
          </div>
{/* 
          <JournalEntry />
          <JournalPip />
          <JournalRecord />
          <JournalRecord />
          <JournalRecord />
          <JournalRecord /> */}
        </div>
      </div>
      <JournalMainFooter />
    </GlassAreaContainer>
  );
}
