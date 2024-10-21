import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { UserChatModal } from '../chat/main';
import { UserSettingsModal } from '../settings/main';

export const ContextForCommonTopbarModals = createContext(
  {} as CommonTopbarModals,
);

export interface CommonTopbarModals {
  userChatModal: ContextForOpenableInterface;
  userSettingsModal: ContextForOpenableInterface;
}

export function CommonTopbarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userChatModal = useControllerForOpenable();
  const userSettingsModal = useControllerForOpenable();

  return (
    <ContextForCommonTopbarModals.Provider
      value={{
        userChatModal: userChatModal,
        userSettingsModal: userSettingsModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userChatModal}>
        <UserChatModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={userSettingsModal}>
        <UserSettingsModal />
      </ContextForOpenable.Provider>
    </ContextForCommonTopbarModals.Provider>
  );
}
