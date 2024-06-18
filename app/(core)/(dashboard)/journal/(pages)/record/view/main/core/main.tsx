import { JournalRecordEntry } from './feed/entry/main';
import { JournalRecordFeed } from './feed/main';
import { JournalRecordHeader } from './header/main';

export function JournalRecordCore() {
  return (
    <div className='h-full flex-grow overflow-auto'>
      <div className='flex flex-grow flex-col items-center space-y-[2rem] p-[3rem]'>
        <JournalRecordHeader />
        <div className='flex w-3/4 flex-col items-center space-y-[4rem]'>
          <JournalRecordEntry />
          <JournalRecordFeed />
        </div>
      </div>
    </div>
  );
}
