import { createContext } from "react";

interface ContextForFlippableInterface {
  flipped: boolean;
  flip: () => void;
}

export const ContextForFlippable = createContext({
  flipped: false,
  flip: () => {},
} as ContextForFlippableInterface);