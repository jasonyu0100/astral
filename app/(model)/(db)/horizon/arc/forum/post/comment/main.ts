import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(model)/(db)/main";
import { PostCommentObj } from "@/(model)/horizon/arc/forum/post/comment/main";
import { gqlArgs } from "@/(utils)/clean";
import { createPostCommentObj, deletePostCommentObj, updatePostCommentObj } from "@/graphql/mutations";
import { listPostCommentObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as PostCommentObj;
}

function castMultiple(objs: any[]) {
  return objs as PostCommentObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listPostCommentObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listPostCommentObjs);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listPostCommentObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listPostCommentObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const postCommentDbWrapper: GqlDbWrapper<PostCommentObj> = {
    getObj,
    listObjs,
    listAllObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}