import { JournalDailyTableHeader } from './header/main';
import { JouranlRecordTableList } from './list/main';

export function JournalDailyTable() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <JournalDailyTableHeader />
      <JouranlRecordTableList />
    </div>
  );
}
