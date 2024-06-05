import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import { exampleFile, exampleFiles } from '@/(model)/concept/file/main';
import { JournalRecordHeader } from './header/main';
import { JournalHeaderContents } from './contents/main';

export function JournalRecord() {
  return (
    <GlassWindowFrame
      className='w-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded']}
    >
      <GlassWindowContents>
        <JournalRecordHeader />
        <JournalHeaderContents />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
