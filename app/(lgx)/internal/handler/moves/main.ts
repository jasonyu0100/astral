import { useState, useMemo, createContext } from 'react';
import { MoveObj } from '@/(types)/model/flow/move/main';
import { FileObj } from '@/(types)/model/resource/file/main';
import { toast } from 'sonner';
import { movesGqlHelper } from '../../../../(types)/gql/moves/main';

export interface MoveActions {
  listMoves: () => Promise<void>;
  createMove: (
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
  ) => Promise<MoveObj>;
}

interface MovesHandler {
  move: MoveObj | undefined;
  moveId: string;
  moves: MoveObj[];
  moveActions: MoveActions;
}

export const MovesHandlerContext = createContext({} as MovesHandler);

export const useMovesHandler = (userId: string): MovesHandler => {
  const [moves, changeMoves] = useState<MoveObj[]>([]);
  const [moveId, changeMoveId] = useState('');

  const move = moves.find((move) => move.id === moveId);

  const moveActions: MoveActions = {
    listMoves: async () => {
      const moves = await movesGqlHelper.gqlListMoves(userId);
      changeMoves(moves);
      changeMoveId(moves[0]?.id || '');
    },
    createMove: async (
      title: string,
      description: string,
      thumbnail: FileObj,
      variant: string,
    ) => {
      const move = await movesGqlHelper.gqlCreateMove(
        userId,
        title,
        description,
        thumbnail,
        variant,
      );
      changeMoves((prev) => [...prev, move]);
      changeMoveId(move.id);
      toast('Move has been created.');
      return move;
    },
  };

  useMemo(() => {
    if (!userId) {
      changeMoves([]);
      return;
    }
    moveActions.listMoves();
  }, [userId]);

  return {
    move,
    moveId,
    moves,
    moveActions,
  };
};
