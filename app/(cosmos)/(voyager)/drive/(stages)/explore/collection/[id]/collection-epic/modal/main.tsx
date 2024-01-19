import { createContext, useState } from 'react';

export interface CollectionModalsContextObj {
  addFile: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const CollectionModalContext = createContext({} as CollectionModalsContextObj);

export const useCollectionModalContext = (): CollectionModalsContextObj => {
  const [showOne, changeShowOne] =
    useState(false);

  return {
    addFile: {
      showModal: showOne,
      openModal: () => changeShowOne(true),
      closeModal: () => changeShowOne(false),
    },
  };
};