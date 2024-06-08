import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ForumPostObj } from "@/(model)/horizon/arc/forum/post/main";
import { gqlArgs } from "@/(utils)/clean";
import { createForumPostObj, deleteForumPostObj, updateForumPostObj } from "@/graphql/mutations";
import { listForumPostObjs } from "@/graphql/queries";

function castSingle(obj: any): ForumPostObj {
  return obj as ForumPostObj;
}

function castMultiple(objs: any[]): ForumPostObj[] {
  return objs as ForumPostObj[];
}

async function getObj(key: string, value: string): Promise<ForumPostObj> {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listForumPostObjs);
}

async function getFromVariables(variables: Object): Promise<ForumPostObj> {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listForumPostObjs);
}

async function listObjs(key: string, value: string): Promise<ForumPostObj[]> {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listForumPostObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<ForumPostObj[]> {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listForumPostObjs?.items || []);
}

async function createObj(newObj: Omit<ForumPostObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createForumPostObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createForumPostObj);
} 

async function updateObj(id: string, updateObj: Partial<ForumPostObj>) {
  const payload = await amplifyClient.graphql({
    query: updateForumPostObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateForumPostObj);
} 

async function overwriteObj(id: string, newObj: ForumPostObj) {
  const payload = await amplifyClient.graphql({
    query: updateForumPostObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateForumPostObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteForumPostObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteForumPostObj);
} 

interface ForumPostDbWrapper {
    getObj: (key: string, value: string) => Promise<ForumPostObj>;
    listObjs: (key: string, value: string) => Promise<ForumPostObj[]>;
    createObj: (newObj: Omit<ForumPostObj, 'id'>) => Promise<ForumPostObj>;
    updateObj: (id: string, updateObj: Partial<ForumPostObj>) => Promise<ForumPostObj>;
    overwriteObj: (id: string, newObj: ForumPostObj) => Promise<ForumPostObj>;
    deleteObj: (id: string) => Promise<ForumPostObj>;
    getFromVariables: (variables: Object) => Promise<ForumPostObj>;
    listFromVariables: (variables: Object) => Promise<ForumPostObj[]>;
}

export const forumPostDbWrapper: ForumPostDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}