import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { JournalRecordSidebarEntry } from '../entry/main';

export function JournalRecordSidebarAdd({ onClick }: { onClick?: () => void }) {
  return (
    <GlassWindowFrame
      name={JournalRecordSidebarEntry.name}
      borderFx={borderFx['border-around']}
      className='p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents
        className='flex cursor-pointer flex-row'
        onClick={onClick}
      >
        <div className='flex flex-col'>
          <p className='text-lg font-bold text-slate-300'>New Page</p>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
