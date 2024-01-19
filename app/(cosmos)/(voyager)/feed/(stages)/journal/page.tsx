'use client';
import insideCosmos from '@/utils/isAuth';
import { FeedJournalView } from './view';
import { createContext } from 'react';
import { MomentObj } from '@/tables/flow/moment/main';
import { MomentHandler, useMoments } from '@/(cosmos)/handler/moments/main';

interface FeedJournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: MomentHandler;
}

export const FeedJournalContext = createContext<FeedJournalContextObj>({
} as FeedJournalContextObj);

function Page() {
  const { momentId, moments, _momentHandler } = useMoments("", "");

  const momentHandler: MomentHandler = {
    updateMoments: (moments: MomentObj[]) => {
      _momentHandler.updateMoments(moments);
      return moments;
    },
    updateMoment: (moment: MomentObj) => {
      _momentHandler.updateMoment(moment);
      return moment;
    },
    addMoment: (moment: MomentObj) => {
      _momentHandler.addMoment(moment);
      return moment;
    },
  };

  const context: FeedJournalContextObj = {
    momentId,
    moments,
    momentHandler,
  };

  return (
    <FeedJournalContext.Provider value={context}>
      <FeedJournalView />
    </FeedJournalContext.Provider>
  );
}

export default insideCosmos(Page);
