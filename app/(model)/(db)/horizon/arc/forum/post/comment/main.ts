import { amplifyClient } from "@/(api)/aws/graphql/main";
import { PostCommentObj } from "@/(model)/horizon/arc/forum/post/comment/main";
import { gqlArgs } from "@/(utils)/clean";
import { createPostCommentObj, deletePostCommentObj, updatePostCommentObj } from "@/graphql/mutations";
import { listPostCommentObjs } from "@/graphql/queries";

function castSingle(obj: any): PostCommentObj {
  return obj as PostCommentObj;
}

function castMultiple(objs: any[]): PostCommentObj[] {
  return objs as PostCommentObj[];
}

async function getObj(key: string, value: string): Promise<PostCommentObj> {
  const payload = await amplifyClient.graphql({
    query: listPostCommentObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listPostCommentObjs);
}

async function getFromVariables(variables: Object): Promise<PostCommentObj> {
  const payload = await amplifyClient.graphql({
    query: listPostCommentObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listPostCommentObjs);
}

async function listObjs(key: string, value: string): Promise<PostCommentObj[]> {
  const payload = await amplifyClient.graphql({
    query: listPostCommentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listPostCommentObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<PostCommentObj[]> {
  const payload = await amplifyClient.graphql({
    query: listPostCommentObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listPostCommentObjs?.items || []);
}

async function createObj(newObj: Omit<PostCommentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createPostCommentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createPostCommentObj);
} 

async function updateObj(id: string, updateObj: Partial<PostCommentObj>) {
  const payload = await amplifyClient.graphql({
    query: updatePostCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updatePostCommentObj);
} 

async function overwriteObj(id: string, newObj: PostCommentObj) {
  const payload = await amplifyClient.graphql({
    query: updatePostCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updatePostCommentObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deletePostCommentObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deletePostCommentObj);
} 

interface PostCommentDbWrapper {
    getObj: (key: string, value: string) => Promise<PostCommentObj>;
    listObjs: (key: string, value: string) => Promise<PostCommentObj[]>;
    createObj: (newObj: Omit<PostCommentObj, 'id'>) => Promise<PostCommentObj>;
    updateObj: (id: string, updateObj: Partial<PostCommentObj>) => Promise<PostCommentObj>;
    overwriteObj: (id: string, newObj: PostCommentObj) => Promise<PostCommentObj>;
    deleteObj: (id: string) => Promise<PostCommentObj>;
    getFromVariables: (variables: Object) => Promise<PostCommentObj>;
    listFromVariables: (variables: Object) => Promise<PostCommentObj[]>;
}

export const postCommentDbWrapper: PostCommentDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}