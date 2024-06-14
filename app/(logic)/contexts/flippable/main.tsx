import { createContext, useState } from 'react';

interface ContextForFlippableInterface {
  flipped: boolean;
  flip: () => void;
}

export const ContextForFlippable = createContext({
  flipped: false,
  flip: () => {},
} as ContextForFlippableInterface);

export const useControllerForFlippable = () => {
  const [flipped, setFlipped] = useState(false);

  return {
    flipped,
    flip: () => setFlipped(!flipped),
  };
};
