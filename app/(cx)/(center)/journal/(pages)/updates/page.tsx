'use client';
import insideVerse from '@/(lgx)/utils/isAuth';
import { JournalView } from './(updates-epic)/view';
import { createContext } from 'react';
import {
  JournalActions,
  useJournalHandler,
} from '@/(lgx)/internal/handler/journal/main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import { MomentObj } from '@/(lgx)/internal/model/journal/moment/main';

interface JournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: JournalActions;
}

export const JournalContext = createContext<JournalContextObj>(
  {} as JournalContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { momentId, moments, journalActions: _momentHandler } = useJournalHandler(
    user.id,
  );

  const context: JournalContextObj = {
    momentId,
    moments,
    momentHandler: _momentHandler,
  };

  return (
    <JournalContext.Provider value={context}>
      <JournalView />
    </JournalContext.Provider>
  );
}

export default insideVerse(Page);
