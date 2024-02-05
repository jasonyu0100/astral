import { createContext, useEffect, useState } from 'react';

export interface SpacesModalsContextObj {
  createSpace: {
    page: number;
    opened: boolean;
    open: () => void;
    close: () => void;
    updatePage: (page: number) => void;
  };
}

export const SpacesModalContext = createContext({} as SpacesModalsContextObj);

export const useSpacesModalContext = (): SpacesModalsContextObj => {
  const [showOne, changeOne] =
    useState(false);
  const [page, changePage] = useState(0)

  useEffect(() => {
    changePage(0)
  }, [showOne])

  return {
    createSpace: {
      page,
      opened: showOne,
      open: () => changeOne(true),
      close: () => changeOne(false),
      updatePage: (page: number) => changePage(page),
    },
  };
};