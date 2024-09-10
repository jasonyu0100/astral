import { JournalRecordContainer } from './container/main';
import { JournalRecordMain } from './main/main';
import { JournalRecordSidebar } from './sidebar/main';

export function JournalRecordView() {
  return (
    <JournalRecordContainer>
      <JournalRecordSidebar />
      <JournalRecordMain />
    </JournalRecordContainer>
  );
}
