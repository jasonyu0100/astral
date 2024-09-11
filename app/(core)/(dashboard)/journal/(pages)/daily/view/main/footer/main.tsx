import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { JournalDailyFooterCenter } from './center/main';
import { JournalDailyFooterLeft } from './left/main';
import { JournalDailyerFooterRight } from './right/main';

export function JournalDailyFooter() {
  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='flex flex-row items-center px-[2rem]'>
        <JournalDailyFooterLeft />
        <JournalDailyFooterCenter />
        <JournalDailyerFooterRight />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
