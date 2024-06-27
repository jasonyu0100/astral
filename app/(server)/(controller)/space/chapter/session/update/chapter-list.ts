import {
  BaseListCreateActions,
  BaseListDeleteActions,
  BaseListEditActions,
  BaseListGatherActions,
  BaseListStateActions,
} from '@/(server)/(controller)/list';
import { chapterSessionUpdateDbWrapper } from '@/(server)/(db)/space/chapter/session/update/main';
import {
  ChapterSessionUpdateObj,
  ChapterSessionUpdateVariant,
} from '@/(server)/(model)/space/chapter/session/update/main';
import { createContext, useMemo, useState } from 'react';

type TargetObj = ChapterSessionUpdateObj;
const gqlDbWrapper = chapterSessionUpdateDbWrapper;
const listIdKey = 'chapterId';

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
  createFromChapter: (
    userId: string,
    spaceId: string,
    chapterId: string,
  ) => Promise<TargetObj>;
  createFromChapterChat: (
    userId: string,
    spaceId: string,
    chapterId: string,
    chatId: string,
  ) => Promise<TargetObj>;
  createFromChapterScene: (
    userId: string,
    spaceId: string,
    chapterId: string,
    sceneId: string,
  ) => Promise<TargetObj>;
  createFromChapterVerse: (
    userId: string,
    spaceId: string,
    chapterId: string,
    verseId: string,
  ) => Promise<TargetObj>;
  createFromChapterChatConversation: (
    userId: string,
    spaceId: string,
    chapterId: string,
    chatId: string,
    conversationId: string,
  ) => Promise<TargetObj>;
  createFromChapterSceneIdea: (
    userId: string,
    spaceId: string,
    chapterId: string,
    sceneId: string,
    ideaId: string,
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

const useControllerForChapterSessionUpdateList = (
  listId: string,
): Controller => {
  const [objs, changeObjs] = useState<TargetObj[]>([]);
  const [id, changeId] = useState<string>(objs?.at(0)?.id || '');
  const [query, changeQuery] = useState<string>('');
  const [queryResults, changeQueryResults] = useState<TargetObj[]>([]);
  const currentObj =
    objs.filter((chat) => chat.id === id).at(0) || ({} as TargetObj);
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
    checkActive: function (obj: TargetObj): boolean {
      return obj.id === id;
    },
    find: (id: string) => {
      return objs.find((obj) => obj.id === id) || ({} as TargetObj);
    },
    pushFront: (obj: TargetObj) => {
      changeObjs((prev) => [obj, ...prev]);
    },
    pushBack: (obj: TargetObj) => {
      changeObjs((prev) => [...prev, obj]);
    },
    pushIndex: (obj: TargetObj, index: number) => {
      changeObjs((prev) => [
        ...prev.slice(0, index),
        obj,
        ...prev.slice(index),
      ]);
    },
    updateObj: (id: string, newObj: TargetObj) => {
      changeObjs((prev) => prev.map((obj) => (obj.id === id ? newObj : obj)));
    },
    deleteIds: (ids: string[]) => {
      changeObjs((prev) => prev.filter((obj) => !ids.includes(obj.id)));
    },
  };

  const gatherActions: GatherActions = {
    gatherAll: async () => {
      const objs = await gqlDbWrapper.listAllObjs();
      changeObjs(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
    gatherLatest: async () => {
      const objs = await gqlDbWrapper.listObjs(listIdKey, listId);
      const sortedObjs = stateActions
        .sortedViaDate(objs)
        .filter((obj) => !obj.sessionId);
      changeObjs(sortedObjs);
      changeId(sortedObjs.at(0)?.id || '');
      return sortedObjs;
    },
    gatherEarliest: async () => {
      const objs = await gqlDbWrapper.listObjs(listIdKey, listId);
      const sortedObjs = stateActions.sortedViaDate(objs);
      const reverseObjs = sortedObjs.reverse();
      changeObjs(reverseObjs);
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
      changeId(objs.at(0)?.id || '');
      return objs;
    },
  };

  const createActions: CreateActions = {
    createEmpty: async () => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: '',
        chapterId: '',
        added: false,
        title: '',
        description: '',
        created: new Date().toISOString(),
        variant: '',
        spaceId: '',
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    createFromChapter: async (userId, spaceId, chapterId) => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: userId,
        chapterId: chapterId,
        added: false,
        title: '',
        description: '',
        spaceId: spaceId,
        created: new Date().toISOString(),
        variant: ChapterSessionUpdateVariant.CHAPTER,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    createFromChapterChat: async (userId, spaceId, chapterId, chatId) => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: userId,
        chapterId: chapterId,
        chatId: chatId,
        added: false,
        spaceId: spaceId,
        title: '',
        description: '',
        created: new Date().toISOString(),
        variant: ChapterSessionUpdateVariant.CHAT,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    createFromChapterScene: async (userId, spaceId, chapterId, sceneId) => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: userId,
        chapterId: chapterId,
        sceneId: sceneId,
        added: false,
        spaceId: spaceId,
        title: '',
        description: '',
        created: new Date().toISOString(),
        variant: ChapterSessionUpdateVariant.SCENE,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    createFromChapterVerse: async (userId, spaceId, chapterId, verseId) => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: userId,
        chapterId: chapterId,
        verseId: verseId,
        added: false,
        spaceId: spaceId,
        title: '',
        description: '',
        created: new Date().toISOString(),
        variant: ChapterSessionUpdateVariant.VERSE,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    createFromChapterChatConversation: async (
      userId,
      spaceId,
      chapterId,
      chatId,
      conversationId,
    ) => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: userId,
        chapterId: chapterId,
        spaceId: spaceId,
        chatId: chatId,
        conversationId: conversationId,
        added: false,
        title: '',
        description: '',
        created: new Date().toISOString(),
        variant: ChapterSessionUpdateVariant.CONVERSATION,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    createFromChapterSceneIdea: async (
      userId,
      spaceId,
      chapterId,
      sceneId,
      ideaId,
    ) => {
      const createObj: Omit<TargetObj, 'id'> = {
        userId: userId,
        chapterId: chapterId,
        spaceId: spaceId,
        sceneId: sceneId,
        ideaId: ideaId,
        added: false,
        title: '',
        description: '',
        created: new Date().toISOString(),
        variant: ChapterSessionUpdateVariant.IDEA,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      stateActions.pushBack(newObj);
      changeId(newObj.id);
      return newObj;
    },
    duplicate: async (target: TargetObj) => {
      const copyObj = target as Omit<TargetObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await gqlDbWrapper.createObj(datedCopy);
      const index = objs.findIndex((obj) => obj.id === target.id);
      stateActions.pushIndex(newObj, index);
      changeId(newObj.id);
      return newObj;
    },
  };

  const editActions: EditActions = {
    edit: async (id: string, partialObj: Partial<TargetObj>) => {
      const updatedObj = await gqlDbWrapper.updateObj(id, partialObj);
      changeObjs((prev) =>
        prev.map((obj) => (obj.id === id ? updatedObj : obj)),
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
      controllerActions.gatherActions.gatherLatest();
    }
  }, [listId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForChapterSessionUpdateList = createContext({} as Controller);
export {
  ContextForChapterSessionUpdateList,
  useControllerForChapterSessionUpdateList,
};
