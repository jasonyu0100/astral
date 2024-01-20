import { amplifyClient } from '@/client';
import { createMomentObj } from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/state/main';
import { FileObj } from '@/tables/file/main';
import { MomentObj } from '@/tables/flow/moment/main';
import { LoomObj } from '@/tables/resource/loom/main';
import { ResourceType } from '@/tables/resource/main';
import { StickyObj } from '@/tables/resource/sticky/main';
import { useEffect, useState } from 'react';

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
    loom: LoomObj,
    visibility: string,
  ) => Promise<MomentObj>;
  queryCreateStickyMoment: (
    title: string,
    log: string,
    sticky: StickyObj,
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

  useEffect(() => {
    if (!chapterId) {
      changeMoments([]);
      return;
    }
    _momentHandler.queryListMoments();
  }, [chapterId]);

  const _momentHandler : MomentHandler = {
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
      const moments = payload.data?.listMomentObjs?.items as MomentObj[];
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
      const payload = await amplifyClient.graphql({
        query: createMomentObj,
        variables: {
          input: {
            chapterId: chapterId,
            spaceId: spaceId,
            userId: state.user.id,
            time: new Date().toISOString(),
            title: title,
            log: log,
            file: file,
            visibility: visibility,
            resourceType: ResourceType.FILE,
          },
        },
      });
      const moment = payload.data?.createMomentObj as MomentObj;
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    queryCreateLoomMoment: async (
      title: string,
      log: string,
      loom: LoomObj,
      visibility: string,
    ) => {
      console.log(loom)
      const payload = await amplifyClient.graphql({
        query: createMomentObj,
        variables: {
          input: {
            chapterId: chapterId,
            spaceId: spaceId,
            userId: state.user.id,
            time: new Date().toISOString(),
            title: title,
            log: log,
            loom: loom,
            visibility: visibility,
            resourceType: ResourceType.LOOM,
          },
        },
      });
      const moment = payload.data?.createMomentObj as MomentObj;
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
      return moment;
    },
    queryCreateStickyMoment: async (
      title: string,
      log: string,
      sticky: StickyObj,
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
            log: log,
            sticky: sticky,
            visibility: visibility,
            resourceType: ResourceType.STICKY,
          },
        },
      });
      const moment = payload.data?.createMomentObj as MomentObj;
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

  return {
    moment,
    momentId,
    moments,
    _momentHandler,
  };
};
