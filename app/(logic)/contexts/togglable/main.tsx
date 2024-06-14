import { createContext, useState } from 'react';
export interface ContextForTogglableInterface {
  toggled: boolean;
  toggle: () => void;
}

export const ContextForTogglable = createContext({
  toggled: false,
  toggle: () => {},
} as ContextForTogglableInterface);

export const useControllerForTogglable = () => {
  const [toggled, setToggled] = useState(false);

  return {
    toggled,
    toggle: () => setToggled(!toggled),
  };
};
