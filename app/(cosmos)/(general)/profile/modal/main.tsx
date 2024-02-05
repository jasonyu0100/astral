import { createContext, useState } from 'react';

export interface ProfileContextObj {
  editProfile: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ProfileModalContext = createContext({} as ProfileContextObj);

export const useProfileModalContext = (): ProfileContextObj => {
  const [showProfile, changeShowProfile] =
    useState(false);

  return {
    editProfile: {
      opened: showProfile,
      open: () => changeShowProfile(true),
      close: () => changeShowProfile(false),
    },
  };
};