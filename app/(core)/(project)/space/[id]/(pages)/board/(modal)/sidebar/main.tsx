import { ContextForOpenableInterface } from '@/(logic)/contexts/openable/main';
import { createContext, useState } from 'react';

export interface ContextForSidebarModalsInterface {
  createCollection: ContextForOpenableInterface;
  createGallery: ContextForOpenableInterface;
  createResource: ContextForOpenableInterface;
}

export const ContextForSidebarModals = createContext(
  {} as ContextForSidebarModalsInterface,
);

export const useControllerForSidebarModals =
  (): ContextForSidebarModalsInterface => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);

    return {
      createCollection: {
        opened: one,
        open: () => setOne(true),
        close: () => setOne(false),
      },
      createGallery: {
        opened: two,
        open: () => setTwo(true),
        close: () => setTwo(false),
      },
      createResource: {
        opened: three,
        open: () => setThree(true),
        close: () => setThree(false),
      },
    };
  };
