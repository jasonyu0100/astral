import { createContext } from "react";

export interface ContextForHoverableInterface {
  hovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}

export const ContextForHoverable = createContext({
  hovered: false,
  onHover: () => {},
  onUnhover: () => {},
});