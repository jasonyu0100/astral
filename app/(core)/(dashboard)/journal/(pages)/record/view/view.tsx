import { JournalRecordContainer } from './container/main';
import { JournalRecordMain } from './main/main';

export function JournalRecordView() {
  return (
    <JournalRecordContainer>
      <JournalRecordMain />
      {/* <JournalRecordSidebar /> */}
    </JournalRecordContainer>
  );
}
