import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { UserProfileEditProfileModal } from '../profile/main';

export const ContextForUserProfileModals = createContext(
  {} as UserProfileModalsController,
);

interface UserProfileModalsController {
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
        <UserProfileEditProfileModal />
      </ContextForOpenable.Provider>
    </ContextForUserProfileModals.Provider>
  );
}
