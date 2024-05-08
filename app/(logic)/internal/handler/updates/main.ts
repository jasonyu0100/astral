import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { FileObj } from '@/(types)/model/resource/file/main';
import { LogObj } from '@/(types)/model/resource/log/main';
import { NoteObj } from '@/(types)/model/resource/note/main';
import { createContext, useMemo, useState } from 'react';
import { updatesGqlHelper } from '../../../../(types)/gql/updates/main';
import { UpdateObj } from '../../../../(types)/model/sea/update/main';

export interface UpdateActions {
  queryListUpdates: (userId: string) => Promise<UpdateObj[]>;
  queryCreateFileUpdate: (
    title: string,
    log: string,
    file: FileObj,
  ) => Promise<UpdateObj>;
  queryCreateLogUpdate: (
    title: string,
    description: string,
    log: LogObj,
  ) => Promise<UpdateObj>;
  queryCreateStickyUpdate: (
    title: string,
    log: string,
    sticky: NoteObj,
  ) => Promise<UpdateObj>;
  updateUpdates: (updates: UpdateObj[]) => UpdateObj[];
  updateUpdate: (update: UpdateObj) => UpdateObj;
  addUpdate: (update: UpdateObj) => UpdateObj;
}

export interface UpdatesHandler {
  update?: UpdateObj;
  updateId: string;
  updates: UpdateObj[];
  updateActions: UpdateActions;
}

export const UpdatesHandlerContext = createContext({} as UpdatesHandler);

export const useUpdatesHandler = (spaceId: string): UpdatesHandler => {
  const user = useGlobalUser((state) => state.user);
  const userId = user?.id || '';
  const [updates, changeUpdates] = useState<UpdateObj[]>([]);
  const [updateId, changeUpdateId] = useState<string>('');

  const update = updates.filter((update) => update.id === updateId).at(0);

  const updateActions: UpdateActions = {
    queryListUpdates: async (userId: string) => {
      const updates = await updatesGqlHelper.listFromChapter(userId);
      changeUpdates(updates);
      changeUpdateId(updates.at(0)?.id || '');
      return updates;
    },
    queryCreateFileUpdate: async (
      title: string,
      log: string,
      file: FileObj,
    ) => {
      const update = await updatesGqlHelper.create.createFromFile(
        spaceId,
        user?.id,
        title,
        log,
        file,
      );
      changeUpdateId(update.id);
      changeUpdates((prev) => [...prev, update]);
      return update;
    },
    queryCreateLogUpdate: async (
      title: string,
      description: string,
      log: LogObj,
    ) => {
      const update = await updatesGqlHelper.create.createFromLog(
        spaceId,
        user?.id,
        title,
        description,
        log,
      );
      changeUpdateId(update.id);
      changeUpdates((prev) => [...prev, update]);
      return update;
    },
    queryCreateStickyUpdate: async (
      title: string,
      log: string,
      sticky: NoteObj,
    ) => {
      const update = await updatesGqlHelper.create.createFromNote(
        spaceId,
        user?.id,
        title,
        log,
        sticky,
      );
      changeUpdateId(update.id);
      changeUpdates((prev) => [...prev, update]);
      return update;
    },
    updateUpdates: (updates: UpdateObj[]) => {
      changeUpdates(updates);
      changeUpdateId(updates.at(0)?.id || '');
      return updates;
    },
    updateUpdate: (update: UpdateObj) => {
      changeUpdateId(update.id);
      return update;
    },
    addUpdate: (update: UpdateObj) => {
      changeUpdates((prev) => [...prev, update]);
      changeUpdateId(update.id);
      return update;
    },
  };

  useMemo(() => {
    if (!userId) {
      changeUpdates([]);
      return;
    }
    updateActions.queryListUpdates(userId);
  }, [userId]);

  return {
    update,
    updateId,
    updates,
    updateActions,
  };
};
