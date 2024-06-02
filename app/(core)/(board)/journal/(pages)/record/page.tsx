'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { JournalView } from './(journal-epic)/view';

function Page() {
  const user = useGlobalUser((state) => state.user);

  return (
    <JournalView/>
  );
}

export default isVerseAuth(Page);
