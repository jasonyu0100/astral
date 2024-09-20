import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { UserChatModal } from '../chat/main';

export const ContextForCommonTopbarModals = createContext(
  {} as CommonTopbarModals,
);

export interface CommonTopbarModals {
  userChatModal: ContextForOpenableInterface;
}

export function CommonTopbarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userChatModal = useControllerForOpenable();

  return (
    <ContextForCommonTopbarModals.Provider
      value={{
        userChatModal: userChatModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userChatModal}>
        <UserChatModal />
      </ContextForOpenable.Provider>
    </ContextForCommonTopbarModals.Provider>
  );
}
