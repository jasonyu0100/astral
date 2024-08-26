import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
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
