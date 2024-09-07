import { JournalRecordTableHeader } from './header/main';
import { JouranlRecordTableList } from './list/main';

export function JournalRecordTable() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <JournalRecordTableHeader />
      <JouranlRecordTableList />
    </div>
  );
}
