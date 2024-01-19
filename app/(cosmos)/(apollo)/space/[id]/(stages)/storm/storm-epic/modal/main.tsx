import { createContext, useState } from 'react';

export interface StormModalsContextObj {
  addChapter: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
  newChat: {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export const StormModalContext = createContext({} as StormModalsContextObj);

export const useStormModalContext = (): StormModalsContextObj => {
  const [showOne, changeShowOne] = useState(false);
  const [showTwo, changeShowTwo] = useState(false);

  return {
    addChapter: {
      showModal: showOne,
      openModal: () => changeShowOne(true),
      closeModal: () => changeShowOne(false),
    },
    newChat: {
      showModal: showTwo,
      openModal: () => changeShowTwo(true),
      closeModal: () => changeShowTwo(false),
    },
  };
};
