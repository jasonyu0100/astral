import { createContext } from "react";

export const ToggleContext = createContext({
  toggled: false,
  toggle: () => {},
});