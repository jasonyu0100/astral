import { createContext, useState } from 'react';

export interface ResourceModalController {
  editResourceModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ResourceModalContext = createContext({} as ResourceModalController);

export const useResourceEditModal = (): ResourceModalController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    editResourceModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
