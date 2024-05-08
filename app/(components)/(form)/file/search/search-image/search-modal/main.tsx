import { createContext, useState } from 'react';

export interface SearchModalController {
  searchModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const SearchModalContext = createContext({} as SearchModalController);

export const useSearchModal = (): SearchModalController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    searchModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
