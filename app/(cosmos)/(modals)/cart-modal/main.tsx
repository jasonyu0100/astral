import { createContext, useState } from 'react';

export interface ElementsModalController {
  elementsModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ElementsModalContext = createContext({} as ElementsModalController);

export const useElementsModal = (): ElementsModalController => {
  const [showEditCart, changeShowEditCart] = useState(false);

  return {
    elementsModal: {
      opened: showEditCart,
      open: () => changeShowEditCart(true),
      close: () => changeShowEditCart(false),
    },
  };
};
