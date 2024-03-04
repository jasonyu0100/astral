'use client';
import insideCosmos from '@/(logic)/utils/isAuth';
import { FeedJournalView } from './view';
import { createContext } from 'react';
import { MomentObj, MomentVisibility } from '@/(logic)/internal/data/infra/model/flow/moment/main';
import {
  JournalActions,
  useJournalHandler,
} from '@/(logic)/internal/handler/journal/main';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

interface FeedJournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: JournalActions;
}

export const FeedJournalContext = createContext<FeedJournalContextObj>(
  {} as FeedJournalContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { momentId, moments, journalActions: _momentHandler } = useJournalHandler(
    user.id,
    MomentVisibility.JOURNAL,
  );

  const context: FeedJournalContextObj = {
    momentId,
    moments,
    momentHandler: _momentHandler,
  };

  return (
    <FeedJournalContext.Provider value={context}>
      <FeedJournalView />
    </FeedJournalContext.Provider>
  );
}

export default insideCosmos(Page);
