import { GlassAreaContainer } from '@/components/glass/area/main';
import { JournalDailyCore } from './core/main';
import { JournalDailyHeader } from './header/main';

export function JournalDailyMain() {
  return (
    <GlassAreaContainer
      name={JournalDailyMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
    >
      <JournalDailyHeader />
      <JournalDailyCore />
    </GlassAreaContainer>
  );
}
