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
  StickyNoteTextIdea,
  StickyNoteColor,
  StickyNoteSize,
} from '@/(components)/(idea)/(text)/sticky/main';
import {
  CardSuit,
  CardNumber,
} from '@/(core)/(project)/space/[id]/(pages)/sea/view/main/month/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import {
  VinylAudioClosedIdea,
  VinylAudioIdea,
} from '@/(components)/(idea)/(audio)/vinyl/main';
import {
  PolaroidImageIdea,
  PolaroidImageIdeaSize,
} from '@/(components)/(idea)/(image)/polaroid/main';
import {
  CardTextIdea,
  CardTextIdeaSize,
} from '@/(components)/(idea)/(text)/card/main';
import {
  ScreenVideoIdea,
  ScreenVideoIdeaSize,
} from '@/(components)/(idea)/(video)/screen/main';
import { Colors } from '@/(components)/(idea)/colors/main';

export function JournalMain() {
  return (
    <GlassAreaContainer
      name={JournalMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
      roundedFx={roundedFx['rounded']}
    >
      <div className='h-full flex-grow overflow-auto'>
        <div className='flex flex-grow flex-col items-center space-y-[2rem] p-[1rem]'>
          <p className='text-3xl font-bold text-white'>Friday, 11 June</p>
          <HorizontalDivider />
          <div className='flex w-3/4 max-w-[800px] flex-col items-center space-y-[2rem]'>
            <JournalEntry />
            <HorizontalDivider />
            <JournalRecord>
              <div className='flex w-full flex-col items-center space-y-[3rem] py-[1rem]'>
                <div className='w-full overflow-auto'>
                  <p className='text-xl font-bold italic text-slate-300'>
                    "I captured a few photos while I was at the beach"
                  </p>
                </div>
                <div className='w-full overflow-auto'>
                  <div className='flex h-[15rem] flex-row items-center space-x-[2rem] pb-[1rem]'>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                  </div>
                </div>
              </div>
            </JournalRecord>
            <JournalPip />
            <JournalRecord>
              <div className='flex w-full flex-col items-center space-y-[3rem] py-[1rem]'>
                <div className='w-full overflow-auto'>
                  <p className='text-xl font-bold italic text-slate-300'>
                    "I captured a few photos while I was at the beach"
                  </p>
                </div>
                <div className='w-full overflow-auto'>
                  <div className='flex h-[15rem] flex-row items-center space-x-[2rem] pb-[1rem]'>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                    <img
                      className='aspect-square h-full rounded shadow-glow'
                      src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ></img>
                  </div>
                </div>
              </div>
            </JournalRecord>
            <JournalPip />
            <JournalRecord />
            <JournalPip />
            <JournalRecord />
          </div>
        </div>
      </div>
      <JournalMainFooter />
    </GlassAreaContainer>
  );
}
