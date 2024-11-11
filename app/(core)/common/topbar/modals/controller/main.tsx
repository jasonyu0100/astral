import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { UserChatModal } from '../chat/main';
import { UserSettingsModal } from '../settings/main';
import { UserThemeModal } from '../theme/main';

export const ContextForCommonTopbarModals = createContext(
  {} as CommonTopbarModals,
);

export interface CommonTopbarModals {
  userChatModal: ContextForOpenableInterface;
  userSettingsModal: ContextForOpenableInterface;
  userThemeModal: ContextForOpenableInterface;
}

export function CommonTopbarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userChatModal = useControllerForOpenable();
  const userSettingsModal = useControllerForOpenable();
  const userThemeModal = useControllerForOpenable();

  return (
    <ContextForCommonTopbarModals.Provider
      value={{
        userChatModal: userChatModal,
        userSettingsModal: userSettingsModal,
        userThemeModal: userThemeModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userChatModal}>
        <UserChatModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={userSettingsModal}>
        <UserSettingsModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={userThemeModal}>
        <UserThemeModal />
      </ContextForOpenable.Provider>
    </ContextForCommonTopbarModals.Provider>
  );
}
