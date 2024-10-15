import { JournalDailyTableListItemDescription } from './description/main';
import { JournalDailyTableListItemEntry } from './preview/main';
import { JournalDailyTableListItemTime } from './time/main';
import { JournalDailyTableListItemTitle } from './title/main';

export function JournalDailyTableListItem() {
  return (
    <div className='grid w-full grid-cols-6 flex-row items-center justify-items-center py-[1rem] font-bold text-slate-300'>
      <JournalDailyTableListItemTime />
      <JournalDailyTableListItemTitle />
      <JournalDailyTableListItemEntry />
      <JournalDailyTableListItemDescription />
    </div>
  );
}
