import { createContext, useState } from 'react';
export interface ContextForTogglableInterface {
  toggled: boolean;
  toggle: () => void;
  updateToggle: (newValue: boolean) => void;
}

export const ContextForTogglable = createContext({
  toggled: false,
  toggle: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateToggle: (newValue: boolean) => {},
} as ContextForTogglableInterface);

export const useControllerForTogglable = () => {
  const [toggled, setToggled] = useState(false);

  return {
    toggled,
    toggle: () => setToggled(!toggled),
    updateToggle: (newValue: boolean) => setToggled(newValue),
  };
};
