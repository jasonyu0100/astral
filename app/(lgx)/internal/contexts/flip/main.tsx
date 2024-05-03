import { createContext } from "react";

export const FlipContext = createContext({
  flipped: false,
  flip: () => {},
});