import { chapterChatDbWrapper } from '@/(model)/(db)/space/chapter/chat/main';
import { ChapterChatObj } from '@/(model)/space/chapter/chat/main';
import { createContext, useMemo, useState } from 'react';

interface ControllerActions {
  stateActions: StateActions;
  gatherActions: GatherActions;
  createActions: CreateActions;
  editActions: EditActions;
  deleteActions: DeleteActions;
}

interface ControllerState {
  chapterId: string;
  chapterChat?: ChapterChatObj;
  chapterChats: ChapterChatObj[];
  chapterChatId: string;
  searchQuery: string;
  searchResults: ChapterChatObj[];
}

interface StateActions {
  select: (obj: ChapterChatObj) => ChapterChatObj;  
  sort: () => ChapterChatObj[];
  goStart: () => ChapterChatObj | undefined;
  goEnd: () => ChapterChatObj | undefined;
  goNext: () => ChapterChatObj | undefined;
  goPrev: () => ChapterChatObj | undefined;
  search: () => ChapterChatObj[];
}

interface GatherActions {
  list: () => Promise<ChapterChatObj[]>;
  filterSearch: (search: string) => Promise<ChapterChatObj[]>;
}

interface CreateActions {
  create: (title: string, description: string) => Promise<ChapterChatObj>;
  duplicate: (target: ChapterChatObj) => Promise<ChapterChatObj>;
}

interface EditActions {
  edit: (
    id: string,
    partialObj: Partial<ChapterChatObj>,
  ) => Promise<ChapterChatObj>;
}

interface DeleteActions {
  delete: (id: string) => Promise<ChapterChatObj>;
  deleteMany: (ids: string[]) => Promise<ChapterChatObj[]>;
}

export interface ChapterChatsController {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForChapterChats = createContext(
  {} as ChapterChatsController,
);

export const useControllerForChapterChats = (
  parentId: string,
): ChapterChatsController => {
  const [objs, changeObjs] = useState<ChapterChatObj[]>([]);
  const [id, changeId] = useState<string>(
    objs?.at(0)?.id || '',
  );
  const current = objs
    .filter((chat) => chat.id === id)
    .at(0);
  const dbWrapper = chapterChatDbWrapper;

  // SEARCH
  const [searchQuery, changeSearchQuery] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<ChapterChatObj[]>([]);

  const controllerState: ControllerState = {
    chapterId: parentId,
    chapterChats: objs,
    chapterChatId: id,
    chapterChat: current,
    searchQuery,
    searchResults,
  };

  const stateActions: StateActions = {
    select: (obj: ChapterChatObj) => {
      changeId(obj.id);
      return obj;
    },
    sort: () => {
      return objs.sort((a, b) => {
        return Date.parse(a.created) < Date.parse(b.created) ? -1 : 1;
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
      const currentIndex = objs.findIndex(
        (obj) => obj.id === parentId,
      );
      const prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        const prevObj = objs[prevIndex];
        changeId(prevObj.id);
        return prevObj;
      }
      return undefined;
    },
    goPrev: () => {
      const currentIndex = objs.findIndex(
        (obj) => obj.id === id,
      );
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
      if (searchQuery === '') {
        return objs;
      } else {
        const results = objs.filter((obj) => {
          const regex = new RegExp(searchQuery, 'i');
          return regex.test(obj.title);
        });
        changeSearchResults(results);
        return results;
      }
    },
  };

  const gatherActions: GatherActions = {
    list: async () => {
      const objs = await dbWrapper.listObjs('chapterId', parentId);
      changeObjs(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
    filterSearch: async (search: string) => {
      const objs = await dbWrapper.listFromVariables({
        filter: {
          chapterId: parentId,
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
    create: async (title: string, description: string) => {
      const createObj: Omit<ChapterChatObj, 'id'> = {
        chapterId: parentId,
        title,
        description: summary,
        created: new Date().toISOString(),
      };
      const newObj = await dbWrapper.createObj(createObj);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      return newObj;
    },
    duplicate: async (target: ChapterChatObj) => {
      const copyObj = target as Omit<ChapterChatObj, 'id'>;
      const datedCopy = { ...copyObj, time: new Date().toISOString() };
      const newObj = await dbWrapper.createObj(datedCopy);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      return newObj;
    },
  };

  const editActions: EditActions = {
    edit: async (id: string, partialObj: Partial<ChapterChatObj>) => {
      const updatedObj = await dbWrapper.updateObj(id, partialObj);
      changeId(updatedObj.id);
      return updatedObj;
    },
  };

  const deleteActions: DeleteActions = {
    delete: async (id: string) => {
      const deletedObj = await dbWrapper.deleteObj(id);
      changeObjs((prev) => prev.filter((chat) => chat.id !== id));
      changeId(objs.at(0)?.id || '');
      return deletedObj;
    },
    deleteMany: async (ids: string[]) => {
      const deletedObjs = await Promise.all(
        ids.map((id) => dbWrapper.deleteObj(id)),
      );
      changeObjs((prev) =>
        prev.filter((chat) => !ids.includes(chat.id)),
      );
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
    if (!parentId) {
      changeObjs([]);
    } else {
      controllerActions.gatherActions.list();
    }
  }, [controllerActions.gatherActions, parentId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};
