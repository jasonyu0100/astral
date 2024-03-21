import { useState, useMemo, createContext } from 'react';
import { MoveObj } from '@/(logic)/internal/model/move/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { toast } from 'sonner';
import { movesGqlHelper } from '../../gql/moves/main';

export interface MoveActions {
  queryListMoves: () => Promise<void>;
  queryCreateMove: (
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
    queryListMoves: async () => {
      const moves = await movesGqlHelper.gqlListMoves(userId);
      changeMoves(moves);
      changeMoveId(moves[0]?.id || '');
    },
    queryCreateMove: async (
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
    moveActions.queryListMoves();
  }, [userId]);

  return {
    move,
    moveId,
    moves,
    moveActions,
  };
};
