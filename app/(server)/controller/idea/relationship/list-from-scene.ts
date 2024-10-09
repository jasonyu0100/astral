import { ideaRelationshipDbWrapper } from '@/(server)/client/idea/relationship/main';
import {
  BaseListCreateActions,
  BaseListDeleteActions,
  BaseListEditActions,
  BaseListGatherActions,
  BaseListStateActions,
} from '@/(server)/controller/list';
import { IdeaObj } from '@/(server)/model/idea/main';
import { WayLinkObj } from '@/(server)/model/space/chapter/way/link/main';
import { IdeaRelationshipObj } from '@/(server)/model/space/relationship/main';
import { createContext, useMemo, useState } from 'react';

type TargetObj = IdeaRelationshipObj;
const gqlDbWrapper = ideaRelationshipDbWrapper;
const listIdKey = 'fromSceneId';

interface ControllerState {
  listId: string | boolean | number;
  currentObj?: TargetObj;
  objs: TargetObj[];
  objId: string;
  more: ControllerMoreState;
  index: number;
}

interface ControllerMoreState {
  query: string;
  queryResults: TargetObj[];
}

interface StateActions extends BaseListStateActions<TargetObj> {}
interface GatherActions extends BaseListGatherActions<TargetObj> {}
interface CreateActions extends BaseListCreateActions<TargetObj> {
  createFromLink: (
    fromLink: WayLinkObj,
    toLink: WayLinkObj,
  ) => Promise<TargetObj>;
  createFromIdea: (
    fromIdea: IdeaObj,
    toIdea: IdeaObj,
    spaceId: string,
    chapterId: string,
    sceneId: string,
  ) => Promise<TargetObj>;
}
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

const useControllerForIdeaRelationshipListFromScene = (
  listId: string | boolean | number,
  initialId?: string | undefined | null,
): Controller => {
  const [objs, changeObjs] = useState<TargetObj[]>([]);
  const [id, changeId] = useState<string>(objs?.at(0)?.id || '');
  const [query, changeQuery] = useState<string>('');
  const [queryResults, changeQueryResults] = useState<TargetObj[]>([]);
  const currentObj =
    objs.filter((obj) => obj.id === id).at(0) || ({} as TargetObj);
  const index = objs.findIndex((obj) => obj.id === id);

  const controllerState: ControllerState = {
    listId: listId,
    objs: objs,
    currentObj: currentObj,
    objId: id,
    index: index,
    more: {
      query: query,
      queryResults: queryResults,
    },
  };

  const stateActions: StateActions = {
    select: (obj: TargetObj) => {
      changeId(obj.id);
      return obj;
    },
    selectViaId: (id: string, newObjs?: TargetObj[]) => {
      changeId(id);
      const targetObjs = newObjs || objs;
      const selectedObj =
        targetObjs.filter((obj) => obj.id === id).at(0) || ({} as TargetObj);
      return selectedObj;
    },
    between(start: Date, end: Date) {
      return objs.filter((obj) => {
        const date = new Date(obj.created);
        return date >= start && date <= end;
      });
    },
    sortedViaDate: (objs: TargetObj[]) => {
      return objs.toSorted((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        return dateA < dateB ? -1 : 1;
      });
    },
    sortedViaComparison: (objs, comparison) => {
      return objs.toSorted((a, b) => {
        return comparison(a, b) ? -1 : 1;
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
    goPrev: () => {
      const currentIndex = objs.findIndex((obj) => obj.id === id);
      const prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        const prevObj = objs[prevIndex];
        changeId(prevObj.id);
        return prevObj;
      } else {
        return undefined;
      }
    },
    searchQuery: () => {
      if (query === '') {
        changeQueryResults(objs);
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
    updateQuery: (newQuery: string) => {
      changeQuery(newQuery);
    },
    searchAndUpdateQuery: (newQuery: string, newObjs?: TargetObj[]) => {
      if (newObjs) {
        changeQuery(newQuery);
        if (newQuery === '') {
          changeQueryResults(newObjs);
          return newObjs;
        } else {
          const results = newObjs.filter((obj) => {
            const regex = new RegExp(newQuery, 'i');
            return regex.test(obj.id);
          });
          changeQueryResults(results);
          return results;
        }
      } else {
        changeQuery(newQuery);
        if (newQuery === '') {
          changeQueryResults(objs);
          return objs;
        } else {
          const results = objs.filter((obj) => {
            const regex = new RegExp(newQuery, 'i');
            return regex.test(obj.id);
          });
          changeQueryResults(results);
          return results;
        }
      }
    },
    checkActive: function (obj: TargetObj): boolean {
      return obj.id === id;
    },
    find: (id: string) => {
      return objs.find((obj) => obj.id === id) || ({} as TargetObj);
    },
    pushFront: (obj: TargetObj) => {
      changeObjs((prev) => [obj, ...prev]);
      return [obj, ...objs];
    },
    pushBack: (obj: TargetObj) => {
      changeObjs((prev) => [...prev, obj]);
      return [...objs, obj];
    },
    pushIndex: (obj: TargetObj, index: number) => {
      changeObjs((prev) => [
        ...prev.slice(0, index),
        obj,
        ...prev.slice(index),
      ]);
      return [...objs.slice(0, index), obj, ...objs.slice(index)];
    },
    updateObj: (id: string, newObj: TargetObj) => {
      changeObjs((prev) => prev.map((obj) => (obj.id === id ? newObj : obj)));
      return objs.map((obj) => (obj.id === id ? newObj : obj));
    },
    deleteIds: (ids: string[]) => {
      changeObjs((prev) => prev.filter((obj) => !ids.includes(obj.id)));
    },
  };

  const gatherActions: GatherActions = {
    gatherAll: async () => {
      const objs = await gqlDbWrapper.listAllObjs();
      changeObjs(objs);
      changeQueryResults(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
    gatherFromEnd: async () => {
      const objs = await gqlDbWrapper.listObjs(listIdKey, listId);
      const sortedObjs = stateActions.sortedViaDate(objs);
      changeObjs(sortedObjs);
      changeQueryResults(sortedObjs);
      changeId(sortedObjs.at(0)?.id || '');
      return sortedObjs;
    },
    gatherFromBeginning: async () => {
      const objs = await gqlDbWrapper.listObjs(listIdKey, listId);
      const sortedObjs = stateActions.sortedViaDate(objs);
      const reverseObjs = sortedObjs.reverse();
      changeObjs(reverseObjs);
      changeQueryResults(reverseObjs);
      changeId(reverseObjs.at(0)?.id || '');
      return reverseObjs;
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
      changeQueryResults(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
  };

  const createActions: CreateActions = {
    createEmpty: async () => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        spaceId: '',
        fromUserId: '',
        fromChapterId: '',
        fromSceneId: '',
        fromIdeaId: '',
        toUserId: '',
        toChapterId: '',
        toSceneId: '',
        toIdeaId: '',
        weight: 0,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      const newObjs = stateActions.pushBack(newObj);
      stateActions.searchAndUpdateQuery(query, newObjs);
      changeId(newObj.id);
      return newObj;
    },
    createFromLink: async (fromLink: WayLinkObj, toLink: WayLinkObj) => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        spaceId: fromLink.spaceId || '',
        fromUserId: fromLink.userId || '',
        fromChapterId: fromLink.chapterId || '',
        fromSceneId: fromLink.sceneId || '',
        fromIdeaId: fromLink.ideaId || '',
        toUserId: toLink.userId || '',
        toChapterId: toLink.chapterId || '',
        toSceneId: toLink.sceneId || '',
        toIdeaId: toLink.ideaId || '',
        weight: 1,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      const newObjs = stateActions.pushBack(newObj);
      stateActions.searchAndUpdateQuery(query, newObjs);
      changeId(newObj.id);
      return newObj;
    },
    createFromIdea: async (
      fromIdea: IdeaObj,
      toIdea: IdeaObj,
      spaceId: string,
      chapterId: string,
      sceneId: string,
    ) => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        spaceId: spaceId,
        fromUserId: fromIdea.userId || '',
        fromChapterId: chapterId,
        fromSceneId: sceneId,
        fromIdeaId: fromIdea.id || '',
        toUserId: toIdea.userId || '',
        toChapterId: chapterId,
        toSceneId: sceneId,
        toIdeaId: toIdea.id || '',
        weight: 1,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      const newObjs = stateActions.pushBack(newObj);
      stateActions.searchAndUpdateQuery(query, newObjs);
      changeId(newObj.id);
      return newObj;
    },
    duplicate: async (target: TargetObj) => {
      const copyObj = target as Omit<TargetObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await gqlDbWrapper.createObj(datedCopy);
      const index = objs.findIndex((obj) => obj.id === target.id);
      const newObjs = stateActions.pushIndex(newObj, index);
      stateActions.searchAndUpdateQuery(query, newObjs);
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
      changeQueryResults((prev) =>
        prev.map((chat) => (chat.id === id ? updatedObj : chat)),
      );
      changeId(updatedObj.id);
      return updatedObj;
    },
    sync: async () => {
      const updatedObjs = await Promise.all(
        objs.map((obj) => {
          const updatedObj = gqlDbWrapper.updateObj(obj.id, obj);
          return updatedObj;
        }),
      );
      changeObjs(updatedObjs);
      return updatedObjs;
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
    if (listId === null || listId === undefined || listId === '') {
      changeObjs([]);
    } else {
      controllerActions.gatherActions.gatherFromEnd().then((objs) => {
        if (initialId) {
          if (objs.find((obj) => obj.id === initialId)) {
            stateActions.selectViaId(initialId);
          }
        }
      });
    }
  }, [listId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForIdeaRelationshipListFromScene = createContext({} as Controller);
export {
  ContextForIdeaRelationshipListFromScene,
  useControllerForIdeaRelationshipListFromScene,
};
