import { createContext, useState } from "react";

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

export const useControllerForHoverable = () => {
  const [hovered, setHovered] = useState(false);

  return {
    hovered,
    onHover: () => setHovered(true),
    onUnhover: () => setHovered(false),
  };
}