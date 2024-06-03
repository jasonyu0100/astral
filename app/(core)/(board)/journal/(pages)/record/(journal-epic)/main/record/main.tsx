import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { spaceMap } from '@/(core)/(studio)/space/[id]/map';
import { horizonMap } from '@/(core)/(venture)/horizon/[id]/map';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import { exampleFile, exampleFiles } from '@/(types)/model/resource/file/main';
import { JournalRecordHeader } from './header/main';
import { JournalHeaderContents } from './contents/main';

export function JournalRecord() {
  return (
    <GlassWindowFrame
      className='w-full'
      borderFx={borderFx['border-all']}
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
