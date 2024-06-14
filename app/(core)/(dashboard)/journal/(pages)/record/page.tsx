'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { JournalRecordView } from './view/view';

function Page() {
  return <JournalRecordView />;
}

export default isVerseAuth(Page);
