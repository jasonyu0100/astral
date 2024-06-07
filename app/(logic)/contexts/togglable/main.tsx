import { createContext } from "react";


export interface ContextForTogglableInterface {
  toggled: boolean;
  toggle: () => void;
}

export const ContextForTogglable = createContext({
  toggled: false,
  toggle: () => {},
} as ContextForTogglableInterface);