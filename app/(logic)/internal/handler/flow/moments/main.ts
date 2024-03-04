import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { MomentObj } from '@/(logic)/internal/data/infra/model/flow/moment/main';
import { LogObj } from '@/(logic)/internal/data/infra/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/data/infra/model/resource/note/main';
import { createContext, useMemo, useState } from 'react';
import { gqlHelper } from '../../../gql/moments/main';

export interface MomentActions {
  queryListMoments: () => Promise<MomentObj[]>;
  queryCreateFileMoment: (
    title: string,
    log: string,
    file: FileObj,
    visibility: string,
  ) => Promise<MomentObj>;
  queryCreateLogMoment: (
    title: string,
    description: string,
    log: LogObj,
    visibility: string,
  ) => Promise<MomentObj>;
  queryCreateStickyMoment: (
    title: string,
    log: string,
    sticky: NoteObj,
    visibility: string,
  ) => Promise<MomentObj>;
  updateMoments: (moments: MomentObj[]) => MomentObj[];
  updateMoment: (moment: MomentObj) => MomentObj;
  addMoment: (moment: MomentObj) => MomentObj;
}

export interface MomentsHandler {
  moment?: MomentObj;
  momentId: string;
  moments: MomentObj[];
  momentActions: MomentActions;
}

export const MomentsHandlerContext = createContext({} as MomentsHandler);

export const useMomentsHandler = (
  chapterId: string,
  spaceId: string,
): MomentsHandler => {
  const user = useGlobalUser((state) => state.user);
  const [moments, changeMoments] = useState<MomentObj[]>([]);
  const [momentId, changeMomentId] = useState<string>('');

  const moment = moments.filter((moment) => moment.id === momentId).at(0);

  const momentActions: MomentActions = {
    queryListMoments: async () => {
      const moments = await gqlHelper.queryListMoments(chapterId);
      changeMoments(moments);
      changeMomentId(moments.at(0)?.id || '');
      return moments;
    },
    queryCreateFileMoment: async (
      title: string,
      log: string,
      file: FileObj,
      visibility: string,
    ) => {
      const moment = await gqlHelper.queryCreateFileMoment(
        chapterId,
        spaceId,
        user?.id,
        title,
        log,
        file,
        visibility,
      );
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    queryCreateLogMoment: async (
      title: string,
      description: string,
      log: LogObj,
      visibility: string,
    ) => {
      const moment = await gqlHelper.queryCreateLogMoment(
        chapterId,
        spaceId,
        user?.id,
        title,
        description,
        log,
        visibility,
      );
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    queryCreateStickyMoment: async (
      title: string,
      log: string,
      sticky: NoteObj,
      visibility: string,
    ) => {
      const moment = await gqlHelper.queryCreateStickyMoment(
        chapterId,
        spaceId,
        user?.id,
        title,
        log,
        sticky,
        visibility,
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
    if (!chapterId) {
      changeMoments([]);
      return;
    }
    momentActions.queryListMoments();
  }, [chapterId]);

  return {
    moment,
    momentId,
    moments,
    momentActions,
  };
};
