import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSidebarAddMemberModal } from '../member/main';

export const ContextForSpacesSidebarModals = createContext(
  {} as SpacesSidebarModals,
);

export interface SpacesSidebarModals {
  addMemberController: ContextForOpenableInterface;
}

export function SpacesSidebarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addMemberController = useControllerForOpenable();

  return (
    <ContextForSpacesSidebarModals.Provider
      value={{
        addMemberController: addMemberController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addMemberController}>
        <SpacesSidebarAddMemberModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesSidebarModals.Provider>
  );
}
