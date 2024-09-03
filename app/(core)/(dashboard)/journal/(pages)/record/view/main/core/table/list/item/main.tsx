import { JournalRecordTableListItemDescription } from './description/main';
import { JournalRecordTableListItemPreview } from './preview/main';
import { JournalRecordTableListItemTime } from './time/main';
import { JournalRecordTableListItemTitle } from './title/main';

export function JournalRecordTableListItem() {
  return (
    <div className='grid  w-full grid-cols-6 flex-row items-center justify-items-center space-y-[3rem]'>
      <JournalRecordTableListItemTime />
      <JournalRecordTableListItemPreview />
      <JournalRecordTableListItemTitle />
      <JournalRecordTableListItemDescription />
    </div>
  );
}
