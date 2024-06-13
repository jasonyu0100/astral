import { userDbWrapper } from '@/(server)/(db)/user/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { UserObj } from '@/(server)/(model)/user/main';
import { createContext, useMemo, useState } from 'react';
import {
  BaseListStateActions,
  BaseListGatherActions,
  BaseListCreateActions,
  BaseListEditActions,
  BaseListDeleteActions,
} from '@/(server)/(controller)/list';
import { ConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { conversationMessageDbWrapper } from '@/(server)/(db)/space/chapter/chat/conversation/message/main';

type TargetObj = ConversationMessageObj;
const gqlDbWrapper = conversationMessageDbWrapper;
interface ControllerState {
  listId: string;
  currentObj?: TargetObj;
  objs: TargetObj[];
  objId: string;
  more: ControllerMoreState;
}

interface ControllerMoreState {
  query: string;
  queryResults: TargetObj[];
  inputMessageText: string;
}

interface StateActions extends BaseListStateActions<TargetObj> {
  updateInputMessageText: (messageText: string) => void;
}
interface GatherActions extends BaseListGatherActions<TargetObj> {}
interface CreateActions extends BaseListCreateActions<TargetObj> {
  sendUserMessage: (userId: string, chatId: string, conversationId: string) => Promise<TargetObj>;
  sendAgentMessage: (agentId: string, chatId: string, conversationId: string, message: string) => Promise<TargetObj>;
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

const useControllerForConversationMessageList = (
  initialId: string,
): Controller => {
  const [listId, changeListId] = useState<string>('');
  const [objs, changeObjs] = useState<TargetObj[]>([]);
  const [id, changeId] = useState<string>(objs?.at(0)?.id || '');
  const [query, changeQuery] = useState<string>('');
  const [queryResults, changeQueryResults] = useState<TargetObj[]>([]);
  const [inputMessageText, changeInputMessageText] = useState<string>('');
  const currentObj =
    objs.filter((chat) => chat.id === id).at(0) || ({} as TargetObj);


  const controllerState: ControllerState = {
    listId: listId,
    objs: objs,
    currentObj: currentObj,
    objId: id,
    more: {
      query: query,
      queryResults: queryResults,
      inputMessageText: inputMessageText,
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
    sorted: (objs: TargetObj[]) => {
      return objs.toSorted((a, b) => {
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
      const currentIndex = objs.findIndex((obj) => obj.id === initialId);
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
    updateInputMessageText: function (newMessage: string): void {
      changeInputMessageText(newMessage);
    },
    find: function (id: string): ConversationMessageObj {
      throw new Error('Function not implemented.');
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
      const objs = await gqlDbWrapper.listObjs('conversationId', initialId);
      changeObjs(objs);
      changeId(objs.at(0)?.id || '');
      return objs;
    },
    gatherSearch: async (search: string) => {
      const objs = await gqlDbWrapper.listFromVariables({
        filter: {
          chapterId: initialId,
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
        created: new Date().toISOString(),
        userId: '',
        conversationId: '',
        chatId: '',
        message: '',
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
      ]);
      changeId(newObj.id);
      return newObj;
    },
    sendUserMessage: async (userId: string, chatId: string, conversationId: string) => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        userId: userId,
        conversationId: conversationId,
        chatId: chatId,
        message: inputMessageText,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      changeInputMessageText('');
      return newObj;
    },
    sendAgentMessage: async (agentId: string, chatId: string, conversationId: string, message: string) => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        agentId: agentId,
        conversationId: conversationId,
        chatId: chatId,
        message: message,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
      changeObjs((prev) => [...prev, newObj]);
      changeId(newObj.id);
      return newObj;
    }
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
    if (!initialId) {
      changeObjs([]);
    } else {
      controllerActions.gatherActions.gatherFilter();
    }
  }, [initialId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForConversationMessageList = createContext({} as Controller);
export {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
};
