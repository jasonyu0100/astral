import { createContext, useState } from 'react';

export interface CollectionModalsContextObj {
  addFile: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const CollectionModalContext = createContext({} as CollectionModalsContextObj);

export const useCollectionModalContext = (): CollectionModalsContextObj => {
  const [showOne, changeShowOne] =
    useState(false);

  return {
    addFile: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};