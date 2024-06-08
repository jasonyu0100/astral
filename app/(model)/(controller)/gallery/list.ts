import { userDbWrapper } from '@/(model)/(db)/user/main';
import { exampleFileElem } from '@/(model)/elements/file/main';
import { UserObj } from '@/(model)/user/main';
import { createContext, useMemo, useState } from 'react';
import {
  BaseListStateActions,
  BaseListGatherActions,
  BaseListCreateActions,
  BaseListEditActions,
  BaseListDeleteActions,
} from '@/(model)/(controller)/list';
import { GalleryObj } from '@/(model)/gallery/main';
import { galleryDbWrapper } from '@/(model)/(db)/gallery/main';

type TargetObj = GalleryObj;
const gqlDbWrapper = galleryDbWrapper;
interface ControllerState {
  listId: string;
  currentUser: TargetObj;
  users: TargetObj[];
  userId: string;
  query: string;
  queryResults: TargetObj[];
}

interface StateActions extends BaseListStateActions<TargetObj> {}
interface GatherActions extends BaseListGatherActions<TargetObj> {}
interface CreateActions extends BaseListCreateActions<TargetObj> {}
interface EditActions extends BaseListEditActions<TargetObj> {}
interface DeleteActions extends BaseListDeleteActions<TargetObj> {}
interface ControllerActions {
  stateActions: StateActions;
  gatherActions: GatherActions;
  createActions: CreateActions;
  editActions: EditActions;
  deleteActions: DeleteActions;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

const useControllerForGalleryList = (listId: string): Controller => {
  const [objs, changeObjs] = useState<TargetObj[]>([]);
  const [id, changeId] = useState<string>(objs?.at(0)?.id || '');
  const [query, changeQuery] = useState<string>('');
  const [queryResults, changeQueryResults] = useState<TargetObj[]>([]);
  const currentObj =
    objs.filter((chat) => chat.id === id).at(0) || ({} as TargetObj);

  const controllerState: ControllerState = {
    listId: listId,
    users: objs,
    currentUser: currentObj,
    userId: id,
    query: query,
    queryResults: queryResults,
  };

  const stateActions: StateActions = {
    select: (obj: TargetObj) => {
      changeId(obj.id);
      return obj;
    },
    between(start: Date, end: Date) {
      return objs.filter((obj) => {
        const date = new Date(obj.created);
        return date >= start && date <= end;
      });
    },
    sort: () => {
      return objs.sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        return dateA < dateB ? -1 : 1;
      });
    },
    goStart: () => {
      changeId(objs.at(0)?.id || '');
      return objs.at(0);
    },
    goEnd: () => {
      changeId(objs.at(objs.length - 1)?.id || '');
      return objs.at(objs.length - 1);
    },
    goNext: () => {
      const currentIndex = objs.findIndex((obj) => obj.id === listId);
      const prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        const prevObj = objs[prevIndex];
        changeId(prevObj.id);
        return prevObj;
      }
      return undefined;
    },
    goPrev: () => {
      const currentIndex = objs.findIndex((obj) => obj.id === id);
      const nextIndex = currentIndex + 1;

      if (nextIndex < objs.length) {
        const nextObj = objs[nextIndex];
        changeId(nextObj.id);
        return nextObj;
      } else {
        return undefined;
      }
    },
    search: () => {
      if (query === '') {
        return objs;
      } else {
        const results = objs.filter((obj) => {
          const regex = new RegExp(query, 'i');
          return regex.test(obj.id);
        });
        changeQueryResults(results);
        return results;
      }
    },
  };

  const gatherActions: GatherActions = {
    gatherAll: async () => {
      const objs = await gqlDbWrapper.listAllObjs();
      changeObjs(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
    gatherFilter: async () => {
      const objs = await gqlDbWrapper.listObjs('listId', listId);
      changeObjs(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
    gatherSearch: async (search: string) => {
      const objs = await gqlDbWrapper.listFromVariables({
        filter: {
          chapterId: listId,
          title: {
            contains: search,
          },
        },
      });
      changeObjs(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
  };

  const createActions: CreateActions = {
    create: async () => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        userId: '',
        title: '',
        description: '',
        thumbnail: exampleFileElem,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      return newObj;
    },
    duplicate: async (target: TargetObj) => {
      const copyObj = target as Omit<TargetObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await gqlDbWrapper.createObj(datedCopy);
      const index = objs.findIndex((obj) => obj.id === target.id);
      changeObjs((prev) => [
        ...prev.slice(0, index),
        newObj,
        ...prev.slice(index),
      ])
      changeId(newObj.id);
      return newObj;
    },
  };

  const editActions: EditActions = {
    edit: async (id: string, partialObj: Partial<TargetObj>) => {
      const updatedObj = await gqlDbWrapper.updateObj(id, partialObj);
      changeObjs((prev) =>
        prev.map((chat) => (chat.id === id ? updatedObj : chat)),
      );
      changeId(updatedObj.id);
      return updatedObj;
    },
  };

  const deleteActions: DeleteActions = {
    delete: async (id: string) => {
      const deletedObj = await gqlDbWrapper.deleteObj(id);
      changeObjs((prev) => prev.filter((chat) => chat.id !== id));
      changeId(objs.at(0)?.id || '');
      return deletedObj;
    },
    deleteMany: async (ids: string[]) => {
      const deletedObjs = await Promise.all(
        ids.map((id) => gqlDbWrapper.deleteObj(id)),
      );
      changeObjs((prev) => prev.filter((chat) => !ids.includes(chat.id)));
      changeId(objs.at(0)?.id || '');
      return deletedObjs;
    },
  };

  const controllerActions: ControllerActions = {
    deleteActions: deleteActions,
    stateActions: stateActions,
    gatherActions: gatherActions,
    createActions: createActions,
    editActions: editActions,
  };

  useMemo(() => {
    if (!listId) {
      changeObjs([]);
    } else {
      controllerActions.gatherActions.gatherFilter();
    }
  }, [controllerActions.gatherActions, listId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForUserObjList = createContext({} as Controller);
export { ContextForUserObjList, useControllerForGalleryList };
