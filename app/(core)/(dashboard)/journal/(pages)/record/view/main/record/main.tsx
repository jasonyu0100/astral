import { ProfileCover } from '@/(components)/(element)/profile/main';
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
import { JournalRecordHeader } from './header/main';
import { JournalHeaderContents } from './contents/main';
import { use } from 'react';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';

export function JournalRecord({ children }: { children?: React.ReactNode }) {
  const flippableController = useControllerForFlippable();
  return (
    <GlassWindowFrame
      className='w-full max-w-[1000px] flex-shrink-0'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents onClick={flippableController.flip}>
        <JournalRecordHeader />
        {flippableController.flipped ? (
          <>
            <JournalHeaderContents>{children}</JournalHeaderContents>
          </>
        ) : (
          <JournalHeaderContents>
            <div className='flex items-center p-[1rem]'>
              <p className='font-bold text-white'>Entry #123321</p>
            </div>
          </JournalHeaderContents>
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
