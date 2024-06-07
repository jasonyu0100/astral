import { createContext } from "react";

export interface ContextForIndexableInterface {
  index: number;
}

export const ContextForIndexable = createContext({
  index: -1,
});