import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSidebarAgentConversationModal } from '../conversation/agent/main';
import { SpacesSidebarMemberConversationModal } from '../conversation/member/main';
import { SpacesSidebarAddMemberModal } from '../member/main';

export const ContextForSpacesSidebarModals = createContext(
  {} as SpacesSidebarModals,
);

export interface SpacesSidebarModals {
  addMemberController: ContextForOpenableInterface;
  memberConversationController: ContextForOpenableInterface;
  agentConversationController: ContextForOpenableInterface;
}

export function SpacesSidebarModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addMemberController = useControllerForOpenable();
  const memberConversationController = useControllerForOpenable();
  const agentConversationController = useControllerForOpenable();

  return (
    <ContextForSpacesSidebarModals.Provider
      value={{
        addMemberController: addMemberController,
        memberConversationController: memberConversationController,
        agentConversationController: agentConversationController,
      }}
    >
      <ContextForOpenable.Provider value={addMemberController}>
        <SpacesSidebarAddMemberModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={memberConversationController}>
        <SpacesSidebarMemberConversationModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={agentConversationController}>
        <SpacesSidebarAgentConversationModal />
      </ContextForOpenable.Provider>
      {children}
    </ContextForSpacesSidebarModals.Provider>
  );
}
