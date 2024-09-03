import { JournalRecordHeader } from './header/main';
import { JournalRecordTable } from './table/main';

export function JournalRecordCore() {
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      <JournalRecordHeader />
      <JournalRecordTable />
    </div>
  );
}
