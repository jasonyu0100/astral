import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { UserSettingsModal } from '../settings/main';

export const ContextForUserSettingsModals = createContext(
  {} as UserSettingsModals,
);

export interface UserSettingsModals {
  userSettingsModal: ContextForOpenableInterface;
}

export function UserSettingsModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSettingsModal = useControllerForOpenable();

  return (
    <ContextForUserSettingsModals.Provider
      value={{
        userSettingsModal: userSettingsModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userSettingsModal}>
        <UserSettingsModal />
      </ContextForOpenable.Provider>
    </ContextForUserSettingsModals.Provider>
  );
}
