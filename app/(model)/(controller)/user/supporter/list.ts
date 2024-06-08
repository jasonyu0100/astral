import { userSupporterDbWrapper } from '@/(model)/(db)/user/supporter/main';
import { UserSupporterObj } from '@/(model)/user/supporter/main';
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
  userSupporter?: UserSupporterObj;
  userSupporters: UserSupporterObj[];
  userSupporterId: string;
  searchQuery: string;
  searchResults: UserSupporterObj[];
}

interface StateActions {
  select: (obj: UserSupporterObj) => UserSupporterObj;  
  sort: () => UserSupporterObj[];
  goStart: () => UserSupporterObj | undefined;
  goEnd: () => UserSupporterObj | undefined;
  goNext: () => UserSupporterObj | undefined;
  goPrev: () => UserSupporterObj | undefined;
  search: () => UserSupporterObj[];
}

interface GatherActions {
  list: () => Promise<UserSupporterObj[]>;
  filterSearch: (search: string) => Promise<UserSupporterObj[]>;
}

interface CreateActions {
  create: (title: string, description: string) => Promise<UserSupporterObj>;
  duplicate: (target: UserSupporterObj) => Promise<UserSupporterObj>;
}

interface EditActions {
  edit: (
    id: string,
    partialObj: Partial<UserSupporterObj>,
  ) => Promise<UserSupporterObj>;
}

interface DeleteActions {
  delete: (id: string) => Promise<UserSupporterObj>;
  deleteMany: (ids: string[]) => Promise<UserSupporterObj[]>;
}

export interface UserSupportersController {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForUserSupporters = createContext(
  {} as UserSupportersController,
);

export const useControllerForUserSupporters = (
  parentId: string,
): UserSupportersController => {
  const [objs, changeObjs] = useState<UserSupporterObj[]>([]);
  const [id, changeId] = useState<string>(
    objs?.at(0)?.id || '',
  );
  const current = objs
    .filter((chat) => chat.id === id)
    .at(0);
  const dbWrapper = userSupporterDbWrapper;

  // SEARCH
  const [searchQuery, changeSearchQuery] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<UserSupporterObj[]>([]);

  const controllerState: ControllerState = {
    chapterId: parentId,
    userSupporters: objs,
    userSupporterId: id,
    userSupporter: current,
    searchQuery,
    searchResults,
  };

  const stateActions: StateActions = {
    select: (obj: UserSupporterObj) => {
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
    create: async (userId: string, supporterId: string) => {
      const createObj: Omit<UserSupporterObj, 'id'> = {
        userId: userId,
        supporterId: supporterId,
        created: new Date().toISOString(),
      };
      const newObj = await dbWrapper.createObj(createObj);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      return newObj;
    },
    duplicate: async (target: UserSupporterObj) => {
      const copyObj = target as Omit<UserSupporterObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await dbWrapper.createObj(datedCopy);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      return newObj;
    },
  };

  const editActions: EditActions = {
    edit: async (id: string, partialObj: Partial<UserSupporterObj>) => {
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
