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
  userSettingsModal: ContextForOpenableInterface;
  userChatModal: ContextForOpenableInterface;
}

export function CommonTopbarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSettingsModal = useControllerForOpenable();
  const userChatModal = useControllerForOpenable();

  return (
    <ContextForCommonTopbarModals.Provider
      value={{
        userSettingsModal: userSettingsModal,
        userChatModal: userChatModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userSettingsModal}>
        <UserSettingsModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={userChatModal}>
        <UserChatModal />
      </ContextForOpenable.Provider>
    </ContextForCommonTopbarModals.Provider>
  );
}
