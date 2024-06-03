import { createContext, useState } from 'react';

export interface SettingsModalController {
  settingsModal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
}

export const SettingsModalContext = createContext({} as SettingsModalController);

export const useSettingsModal = (): SettingsModalController => {
  const [showOne, changeShowOne] = useState(false);

  return {
    settingsModal: {
      opened: showOne,
      open: () => changeShowOne(true),
      close: () => changeShowOne(false),
    },
  };
};
