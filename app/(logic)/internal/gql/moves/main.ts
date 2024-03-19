import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { MoveObj } from '../../model/move/main';
import { createMoveObj } from '@/graphql/mutations';
import { getMoveObj, listMoveObjs } from '@/graphql/queries';

export interface MovesGqlHelper {
    queryGetMove: (id: string) => Promise<MoveObj>,
    queryCreateMove: (
        userId: string,
        title: string,
        description: string,
        thumbnail: FileObj,
        variant: string,
    ) => Promise<MoveObj>;
    queryListMoves: (userId: string) => Promise<MoveObj[]>;
}

export const gqlHelper: MovesGqlHelper = {
  queryGetMove: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getMoveObj,
      variables: {
        id: id,
      },
    });

    const move: MoveObj = payload?.data.getMoveObj as MoveObj;
    return move;
  },
  queryCreateMove: async (
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
        input: {
          userId: userId,
          title,
          description,
          time: currentDate,
          thumbnail,
          variant: variant,
        },
      },
    });
    const move = payload?.data?.createMoveObj as MoveObj;
    return move;
  },
  queryListMoves: async (userId: string) => {
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
    const moves = (payload?.data?.listMoveObjs?.items as MoveObj[]) || [];
    return moves;
  },
};
