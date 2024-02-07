import { createContext, useState } from 'react';

export interface CartModalController {
  editCartModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const CartModalContext = createContext({} as CartModalController);

export const useCartModal = (): CartModalController => {
  const [showEditCart, changeShowEditCart] = useState(false);

  return {
    editCartModal: {
      opened: showEditCart,
      open: () => changeShowEditCart(true),
      close: () => changeShowEditCart(false),
    },
  };
};
