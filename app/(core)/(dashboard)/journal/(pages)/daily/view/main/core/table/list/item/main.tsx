import { JournalDailyTableListItemDescription } from './description/main';
import { JournalDailyTableListItemPreview } from './preview/main';
import { JournalDailyTableListItemTime } from './time/main';
import { JournalDailyTableListItemTitle } from './title/main';

export function JournalDailyTableListItem() {
  return (
    <div className='grid  w-full grid-cols-6 flex-row items-center justify-items-center space-y-[3rem]'>
      <JournalDailyTableListItemTime />
      <JournalDailyTableListItemPreview />
      <JournalDailyTableListItemTitle />
      <JournalDailyTableListItemDescription />
    </div>
  );
}
