import { Dispatch, SetStateAction, createContext } from "react";
import { TwoByTwo } from "../types/2x2/main";

interface GameStateContextInput {
    gameState: TwoByTwo;
    setGameState: Dispatch<SetStateAction<TwoByTwo>>;
}

export const GameStateContext = createContext({} as GameStateContextInput);