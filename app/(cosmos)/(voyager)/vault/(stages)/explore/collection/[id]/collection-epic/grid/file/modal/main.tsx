import { createContext, useState } from 'react';

export interface CartContextObj {
  editCart: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const CartModalContext = createContext({} as CartContextObj);

export const useCartModalContext = (): CartContextObj => {
  const [showEditCart, changeShowEditCart] =
    useState(false);

  return {
    editCart: {
      opened: showEditCart,
      open: () => changeShowEditCart(true),
      close: () => changeShowEditCart(false),
    },
  };
};