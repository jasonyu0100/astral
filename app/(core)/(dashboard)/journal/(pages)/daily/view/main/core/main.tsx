import { JournalDailyHeader } from './header/main';
import { JournalDailyTable } from './table/main';

export function JournalDailyCore() {
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      <JournalDailyHeader />
      <JournalDailyTable />
    </div>
  );
}
