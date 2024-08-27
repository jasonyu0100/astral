import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { JournalRecordFooterCenter } from './center/main';
import { JournalRecordFooterLeft } from './left/main';
import { JournalRecorderFooterRight } from './right/main';

export function JournalRecordFooter() {
  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0 shadow-glow'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='flex flex-row items-center px-[2rem]'>
        <JournalRecordFooterLeft />
        <JournalRecordFooterCenter />
        <JournalRecorderFooterRight />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
