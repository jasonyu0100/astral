import { JournalRecordFeed } from './feed/main';
import { JournalRecordHeader } from './header/main';

export function JournalRecordCore() {
  return (
    <div className='h-full flex-grow overflow-auto'>
      <div className='flex flex-grow flex-col items-center space-y-[2rem]'>
        <JournalRecordHeader />
        <JournalRecordFeed />
      </div>
    </div>
  );
}
