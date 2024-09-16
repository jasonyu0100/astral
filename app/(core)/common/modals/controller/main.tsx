import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { UserSettingsModal } from '../settings/main';

export const ContextForCommonTopbarModals = createContext(
  {} as CommonTopbarModals,
);

export interface CommonTopbarModals {
  userSettingsModal: ContextForOpenableInterface;
}

export function CommonTopbarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSettingsModal = useControllerForOpenable();

  return (
    <ContextForCommonTopbarModals.Provider
      value={{
        userSettingsModal: userSettingsModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={userSettingsModal}>
        <UserSettingsModal />
      </ContextForOpenable.Provider>
    </ContextForCommonTopbarModals.Provider>
  );
}
