import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { MomentObj } from '@/(lgx)/internal/model/journal/moment/main';
import { createContext, useMemo, useState } from 'react';
import { gqlHelper } from '../../gql/journal/main';

export interface JournalActions {
  listMoments: () => Promise<MomentObj[]>;
  createMomentFromFile: (
    title: string,
    log: string,
    file: FileObj,
    chapterId: string,
    spaceId: string,
  ) => Promise<MomentObj>;
  updateMoments: (moments: MomentObj[]) => MomentObj[];
  updateMoment: (moment: MomentObj) => MomentObj;
  addMoment: (moment: MomentObj) => MomentObj;
}

export interface JournalHandler {
  moment?: MomentObj;
  momentId: string;
  moments: MomentObj[];
  journalActions: JournalActions;
}

export const JournalHandlerContext = createContext({} as JournalHandler);

export const useJournalHandler = (
  userId: string,
): JournalHandler => {
  const [moments, changeMoments] = useState<MomentObj[]>([]);
  const [momentId, changeMomentId] = useState<string>('');

  const moment = moments.filter((moment) => moment.id === momentId).at(0);

  const journalActions: JournalActions = {
    listMoments: async () => {
      const moments = await gqlHelper.queryListMoments(userId);
      changeMoments(moments);
      changeMomentId(moments.at(0)?.id || '');
      return moments;
    },
    createMomentFromFile: async (
      title: string,
      log: string,
      file: FileObj,
      chapterId: string,
      spaceId: string,
    ) => {
      const moment = await gqlHelper.queryCreateFileMoment(
        userId,
        title,
        log,
        file,
        chapterId,
        spaceId,
      );
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    updateMoments: (moments: MomentObj[]) => {
      changeMoments(moments);
      changeMomentId(moments.at(0)?.id || '');
      return moments;
    },
    updateMoment: (moment: MomentObj) => {
      changeMomentId(moment.id);
      return moment;
    },
    addMoment: (moment: MomentObj) => {
      changeMoments((prev) => [...prev, moment]);
      changeMomentId(moment.id);
      return moment;
    },
  };

  useMemo(() => {
    if (!userId) {
      changeMoments([]);
      return;
    }
    journalActions.listMoments();
  }, [userId]);

  return {
    moment,
    momentId,
    moments,
    journalActions: journalActions,
  };
};
