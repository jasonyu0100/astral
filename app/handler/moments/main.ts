import { amplifyClient } from '@/client';
import { createMomentObj } from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/state/main';
import { FileObj } from '@/tables/resource/file/main';
import { MomentObj, MomentVariant } from '@/tables/flow/moment/main';
import { LogObj } from '@/tables/resource/log/main';
import { NoteObj } from '@/tables/resource/note/main';
import { useEffect, useMemo, useState } from 'react';

export interface MomentHandler {
  queryListMoments: () => Promise<MomentObj[]>;
  queryCreateFileMoment: (
    title: string,
    log: string,
    file: FileObj,
    visibility: string,
  ) => Promise<MomentObj>;
  queryCreateLoomMoment: (
    title: string,
    log: string,
    loom: LogObj,
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

export interface useMomentInterface {
  moment?: MomentObj;
  momentId: string;
  moments: MomentObj[];
  _momentHandler: MomentHandler;
}

export const useMoments = (
  chapterId: string,
  spaceId: string,
): useMomentInterface => {
  const [state, actions] = useGlobalUser();
  const [moments, changeMoments] = useState<MomentObj[]>([]);
  const [momentId, changeMomentId] = useState<string>('');

  const moment = moments.filter((moment) => moment.id === momentId).at(0);

  const gqlHelper = {
    queryListMoments: async () => {
      const payload = await amplifyClient.graphql({
        query: listMomentObjs,
        variables: {
          filter: {
            chapterId: {
              eq: chapterId,
            },
          },
        },
      });
      const moments = payload.data?.listMomentObjs?.items as MomentObj[] || [];
      return moments;
    },
    queryCreateFileMoment: async (
      title: string,
      description: string,
      file: FileObj,
      visibility: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createMomentObj,
        variables: {
          input: {
            chapterId: chapterId,
            spaceId: spaceId,
            userId: state.user.id,
            time: new Date().toISOString(),
            title: title,
            description: description,
            file: file,
            visibility: visibility,
            variant: MomentVariant.FILE,
          },
        },
      });
      const moment = payload.data?.createMomentObj as MomentObj;
      return moment;
    },
    queryCreateLogMoment: async (
      title: string,
      description: string,
      log: LogObj,
      visibility: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createMomentObj,
        variables: {
          input: {
            chapterId: chapterId,
            spaceId: spaceId,
            userId: state.user.id,
            time: new Date().toISOString(),
            title: title,
            description: description,
            log: log,
            visibility: visibility,
            variant: MomentVariant.LOG,
          },
        },
      });
      const moment = payload.data?.createMomentObj as MomentObj;
      return moment;
    },
    queryCreateStickyMoment: async (
      title: string,
      description: string,
      note: NoteObj,
      visibility: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createMomentObj,
        variables: {
          input: {
            chapterId: chapterId,
            spaceId: spaceId,
            userId: state.user.id,
            time: new Date().toISOString(),
            title: title,
            description: description,
            note: note,
            visibility: visibility,
            variant: MomentVariant.NOTE,
          },
        },
      });
      const moment = payload.data?.createMomentObj as MomentObj;
      return moment;
    },
  };

  const _momentHandler: MomentHandler = {
    queryListMoments: async () => {
      const moments = await gqlHelper.queryListMoments();
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
        title,
        log,
        file,
        visibility,
      );
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    queryCreateLoomMoment: async (
      title: string,
      log: string,
      loom: LogObj,
      visibility: string,
    ) => {
      const moment = await gqlHelper.queryCreateLogMoment(
        title,
        log,
        loom,
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
    _momentHandler.queryListMoments();
  }, [chapterId]);

  return {
    moment,
    momentId,
    moments,
    _momentHandler,
  };
};
