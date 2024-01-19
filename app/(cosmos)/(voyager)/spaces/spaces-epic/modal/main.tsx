import { createContext, useState } from 'react';

export interface SpacesModalsContextObj {
  createSpace: {
    opened: boolean;
    open: () => void;
    closed: () => void;
  };
}

export const SpacesModalContext = createContext({} as SpacesModalsContextObj);

export const useSpacesModalContext = (): SpacesModalsContextObj => {
  const [showOne, changeTwo] =
    useState(false);

  return {
    createSpace: {
      opened: showOne,
      open: () => changeTwo(true),
      closed: () => changeTwo(false),
    },
  };
};