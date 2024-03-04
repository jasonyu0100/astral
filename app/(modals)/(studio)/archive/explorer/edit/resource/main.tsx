import { createContext, useState } from 'react';

export interface EditResourceController {
  editResource: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const EditResourceModalContext = createContext(
  {} as EditResourceController,
);

export const useEditResourceModal = (): EditResourceController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    editResource: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
