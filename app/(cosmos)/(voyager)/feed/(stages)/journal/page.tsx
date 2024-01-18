'use client';
import insideCosmos from '@/utils/isAuth';
import {
  MomentHandler,
  useMoment,
} from '@/(cosmos)/(apollo)/space/[id]/handler/moments/main';
import { FeedJournalView } from './view';
import { createContext } from 'react';
import { MomentObj } from '@/tables/flow/moment/main';

interface FeedJournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: MomentHandler | any;
}

export const FeedJournalContext = createContext<FeedJournalContextObj>({
  momentId: '',
  moments: [],
  momentHandler: undefined,
});

function Page() {
  const { momentId, moments, _momentHandler } = useMoment();

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
