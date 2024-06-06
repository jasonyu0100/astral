import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ForumMemberObj } from "@/(model)/horizon/forum/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createForumMemberObj, deleteForumMemberObj, updateForumMemberObj } from "@/graphql/mutations";
import { listForumMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): ForumMemberObj {
  return obj as ForumMemberObj;
}

function castMultiple(objs: any[]): ForumMemberObj[] {
  return objs as ForumMemberObj[];
}

async function getObj(key: string, value: string): Promise<ForumMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listForumMemberObjs);
}

async function getFromVariables(variables: Object): Promise<ForumMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listForumMemberObjs);
}

async function listObjs(key: string, value: string): Promise<ForumMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listForumMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<ForumMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listForumMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ForumMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createForumMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createForumMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<ForumMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateForumMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateForumMemberObj);
} 

async function overwriteObj(id: string, newObj: ForumMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateForumMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateForumMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteForumMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteForumMemberObj);
} 

interface ForumMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<ForumMemberObj>;
    listObjs: (key: string, value: string) => Promise<ForumMemberObj[]>;
    createObj: (newObj: Omit<ForumMemberObj, 'id'>) => Promise<ForumMemberObj>;
    updateObj: (id: string, updateObj: Partial<ForumMemberObj>) => Promise<ForumMemberObj>;
    overwriteObj: (id: string, newObj: ForumMemberObj) => Promise<ForumMemberObj>;
    deleteObj: (id: string) => Promise<ForumMemberObj>;
    getFromVariables: (variables: Object) => Promise<ForumMemberObj>;
    listFromVariables: (variables: Object) => Promise<ForumMemberObj[]>;
}

export const forumMemberDbWrapper: ForumMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}