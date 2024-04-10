'use client';
import insideVerse from '@/(logic)/utils/isAuth';
import { JournalView } from './(updates-epic)/view';
import { createContext } from 'react';
import {
  JournalActions,
  useJournalHandler,
} from '@/(logic)/internal/handler/journal/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { MomentObj } from '@/(logic)/internal/model/flow/moment/main';

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
