import { GlassAreaContainer } from '@/ui/glass/area/main';
import { JournalDailyCore } from './core/main';
import { JournalDailyFooter } from './footer/main';

export function JournalDailyMain() {
  return (
    <GlassAreaContainer
      name={JournalDailyMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
    >
      <JournalDailyCore />
      <JournalDailyFooter />
    </GlassAreaContainer>
  );
}
