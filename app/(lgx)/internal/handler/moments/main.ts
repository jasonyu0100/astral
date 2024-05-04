import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import { FileObj } from '@/(types)/model/resource/file/main';
import { MomentObj } from '@/(types)/model/journal/moment/main';
import { LogObj } from '@/(types)/model/resource/log/main';
import { NoteObj } from '@/(types)/model/resource/note/main';
import { createContext, useMemo, useState } from 'react';
import { momentsGqlHelper } from '../../../../(types)/gql/moments/main';

export interface MomentActions {
  listMoments: () => Promise<MomentObj[]>;
  createMomentFromFile: (
    title: string,
    log: string,
    file: FileObj,
  ) => Promise<MomentObj>;
  createMomentFromLog: (
    title: string,
    description: string,
    log: LogObj,
  ) => Promise<MomentObj>;
  createMomentFromNote: (
    title: string,
    log: string,
    sticky: NoteObj,
  ) => Promise<MomentObj>;
  updateMoment: (moment: MomentObj) => MomentObj;
  updateMoments: (moments: MomentObj[]) => MomentObj[];
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
    listMoments: async () => {
      const moments = await momentsGqlHelper.listFromChapter(chapterId);
      changeMoments(moments);
      changeMomentId(moments.at(0)?.id || '');
      return moments;
    },
    createMomentFromFile: async (
      title: string,
      log: string,
      file: FileObj,
    ) => {
      const moment = await momentsGqlHelper.create.createFromFile(
        chapterId,
        spaceId,
        user?.id,
        title,
        log,
        file,
      );
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    createMomentFromLog: async (
      title: string,
      description: string,
      log: LogObj,
    ) => {
      const moment = await momentsGqlHelper.create.createFromLog(
        chapterId,
        spaceId,
        user?.id,
        title,
        description,
        log,
      );
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    createMomentFromNote: async (
      title: string,
      log: string,
      sticky: NoteObj,
    ) => {
      const moment = await momentsGqlHelper.create.createFromNote(
        chapterId,
        spaceId,
        user?.id,
        title,
        log,
        sticky,
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
    momentActions.listMoments();
  }, [chapterId]);

  return {
    moment,
    momentId,
    moments,
    momentActions,
  };
};
