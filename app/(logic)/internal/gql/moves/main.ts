import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { MoveObj } from '../../model/flow/move/main';
import {
  createMoveObj,
  deleteMoveObj,
  updateMoveObj,
} from '@/graphql/mutations';
import { getMoveObj, listMoveObjs } from '@/graphql/queries';
import { gqlArgs } from '@/(logic)/utils/clean';

export interface MovesGqlHelper {
  get: (id: string) => Promise<MoveObj>;
  create: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
  ) => Promise<MoveObj>;
  listFromUser: (userId: string) => Promise<MoveObj[]>;
  delete: (moveId: string) => Promise<MoveObj>;
  update: (moveId: string, updatedMoveObj: MoveObj) => Promise<MoveObj>;
}

export const movesGqlHelper = {
  gqlGetMove: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getMoveObj,
      variables: {
        id: id,
      },
    });

    const moveObj: MoveObj = payload?.data.getMoveObj as MoveObj;
    return moveObj;
  },
  gqlCreateMove: async (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMoveObj,
      variables: {
        input: gqlArgs({
          userId: userId,
          title,
          description,
          time: currentDate,
          thumbnail,
          variant: variant,
        }),
      },
    });
    const moveObj = payload?.data?.createMoveObj as MoveObj;
    return moveObj;
  },
  gqlListMoves: async (userId: string) => {
    const payload = await amplifyClient.graphql({
      query: listMoveObjs,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
        },
      },
    });
    const moveObjs = (payload?.data?.listMoveObjs?.items as MoveObj[]) || [];
    return moveObjs;
  },
  gqlDeleteMove: async (moveId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteMoveObj,
      variables: {
        input: {
          id: moveId,
        },
      },
    });
    const moveObj = payload?.data?.deleteMoveObj as MoveObj;
    return moveObj;
  },
  gqlUpdateMove: async (moveId: string, updatedMoveObj: MoveObj) => {
    const payload = await amplifyClient.graphql({
      query: updateMoveObj,
      variables: {
        input: gqlArgs({
          id: moveId,
          userId: updatedMoveObj.userId,
          title: updatedMoveObj.title,
          time: updatedMoveObj.time,
          description: updatedMoveObj.description,
          thumbnail: updatedMoveObj.thumbnail,
          variant: updatedMoveObj.variant,
        }),
      },
    });
    const moveObj = payload?.data?.updateMoveObj as MoveObj;
    return moveObj;
  },
};
