import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { JournalDailyFooterRight } from './center/main';

export function JournalDailyHeader() {
  return (
    <GlassWindowFrame className='h-[4rem] w-full flex-shrink-0'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='grid w-full grid-cols-3 p-[1rem]'>
        <div></div>
        <div></div>
        <JournalDailyFooterRight />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
