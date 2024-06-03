import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import { exampleFile, exampleFiles } from '@/(model)/resource/file/main';
import { JournalEntry } from './entry/main';
import { JournalPip } from './pip/main';
import { JournalRecord } from './record/main';

export function JournalMain() {
  return (
    <GlassAreaContainer
      name={JournalMain.name}
      sizeFx='h-full flex-grow '
    >
      <div className='h-full flex-grow overflow-auto'>
        <div className='flex flex-grow flex-col items-center space-y-[2rem] p-[2rem]'>
          <JournalEntry />
          <JournalPip />
          <JournalRecord />
          <JournalRecord />
          <JournalRecord />
          <JournalRecord />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
