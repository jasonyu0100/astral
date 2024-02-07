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
  const [showProfile, changeShowProfile] = useState(false);

  return {
    editProfileModal: {
      opened: showProfile,
      open: () => changeShowProfile(true),
      close: () => changeShowProfile(false),
    },
  };
};
