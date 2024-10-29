import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { EditProfileModal } from '../profile/main';

export const ContextForUserProfileModals = createContext(
  {} as UserProfileModals,
);

export interface UserProfileModals {
  editProfileModal: ContextForOpenableInterface;
}

export function UserProfileModals({ children }: { children: React.ReactNode }) {
  const editProfileModal = useControllerForOpenable();

  return (
    <ContextForUserProfileModals.Provider
      value={{
        editProfileModal: editProfileModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={editProfileModal}>
        <EditProfileModal />
      </ContextForOpenable.Provider>
    </ContextForUserProfileModals.Provider>
  );
}
