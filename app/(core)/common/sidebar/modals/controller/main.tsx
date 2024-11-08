import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SidebarUserChatModal } from '../chat/main';

export const ContextForCommonSidebarModals = createContext(
  {} as CommonSidebarModals,
);

export interface CommonSidebarModals {
  userChatModal: ContextForOpenableInterface;
}

export function CommonSidebarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userChatModal = useControllerForOpenable();

  return (
    <ContextForCommonSidebarModals.Provider
      value={{
        userChatModal: userChatModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userChatModal}>
        <SidebarUserChatModal />
      </ContextForOpenable.Provider>
    </ContextForCommonSidebarModals.Provider>
  );
}
