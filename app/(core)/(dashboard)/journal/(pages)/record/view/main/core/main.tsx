import { JournalRecordFeed } from './feed/main';
import { JournalRecordHeader } from './header/main';

export function JournalRecordCore() {
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      <JournalRecordHeader />
      <JournalRecordFeed />
    </div>
  );
}
