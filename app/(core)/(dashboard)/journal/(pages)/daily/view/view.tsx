import { JournalDailyContainer } from './container/main';
import { JournalDailyMain } from './main/main';
import { JournalDailySidebar } from './sidebar/main';

export function JournalDailyView() {
  return (
    <JournalDailyContainer>
      <JournalDailySidebar />
      <JournalDailyMain />
    </JournalDailyContainer>
  );
}
