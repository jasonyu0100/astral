import { createContext, useState } from 'react';

export interface ProfileController {
  editProfileModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ProfileModalContext = createContext({} as ProfileController);

export const useProfileModal = (): ProfileController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    editProfileModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
