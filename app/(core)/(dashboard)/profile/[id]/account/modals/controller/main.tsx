import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { EditProfileModal } from '../profile/main';

export const ContextForProfileModals = createContext({} as ProfileModals);

export interface ProfileModals {
  editProfileModal: ContextForOpenableInterface;
}

export function ProfileModals({ children }: { children: React.ReactNode }) {
  const editProfileModal = useControllerForOpenable();

  return (
    <ContextForProfileModals.Provider
      value={{
        editProfileModal: editProfileModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={editProfileModal}>
        <EditProfileModal />
      </ContextForOpenable.Provider>
    </ContextForProfileModals.Provider>
  );
}
