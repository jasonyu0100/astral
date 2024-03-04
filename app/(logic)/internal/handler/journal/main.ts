import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { MomentObj } from '@/(logic)/internal/data/infra/model/flow/moment/main';
import { useMemo, useState } from 'react';
import { gqlHelper } from '../../gql/journal/main';

export interface FeedMomentHandler {
  queryListMoments: () => Promise<MomentObj[]>;
  queryCreateFileMoment: (
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

export interface useFeedMomentInterface {
  moment?: MomentObj;
  momentId: string;
  moments: MomentObj[];
  _momentHandler: FeedMomentHandler;
}

export const useFeedMoments = (
  userId: string,
  visibility: string,
): useFeedMomentInterface => {
  const [moments, changeMoments] = useState<MomentObj[]>([]);
  const [momentId, changeMomentId] = useState<string>('');

  const moment = moments.filter((moment) => moment.id === momentId).at(0);

  const _momentHandler: FeedMomentHandler = {
    queryListMoments: async () => {
      const moments = await gqlHelper.queryListMoments(userId, visibility);
      changeMoments(moments);
      changeMomentId(moments.at(0)?.id || '');
      return moments;
    },
    queryCreateFileMoment: async (
      title: string,
      log: string,
      file: FileObj,
      chapterId: string,
      spaceId: string,
    ) => {
      const moment = await gqlHelper.queryCreateFileMoment(
        userId,
        visibility,
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
    _momentHandler.queryListMoments();
  }, [userId]);

  return {
    moment,
    momentId,
    moments,
    _momentHandler,
  };
};
