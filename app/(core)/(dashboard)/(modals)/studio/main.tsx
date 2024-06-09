import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { ContextForPagableInterface } from '@/(logic)/contexts/pagination/main';
import { createContext, useEffect, useState } from 'react';

export interface SpacesModalController {
  createSpace: {
    pagable: ContextForPagableInterface;
    openable: ContextForOpenableInterface;
  }
}

export const SpacesModalContext = createContext({} as SpacesModalController);

export const useSpacesModal = (): SpacesModalController => {
  const [showOne, changeOne] = useState(false);
  const [page, changePage] = useState(0);

  useEffect(() => {
    changePage(0);
  }, [showOne]);

  return {
    createSpace: {
      openable: {
        opened: showOne,
        open: () => changeOne(true),
        close: () => changeOne(false),
      },
      pagable: {
        page,
        updatePage: (page: number) => changePage(page),
      },
    },
  };
};
