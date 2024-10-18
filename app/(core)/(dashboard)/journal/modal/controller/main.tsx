import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { DashboardJournalAddCollectionModal } from '../add/collection/main';
import { DashboardJournalAddResourceModal } from '../add/resource/main';

export const ContextForDashboardJournalModals = createContext(
  {} as DashboardJournalModalsController,
);

export interface DashboardJournalModalsController {
  addCollectionModal: ContextForOpenableInterface;
  addResourceModal: ContextForOpenableInterface;
}

export function DashboardJournalModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addCollectionModal = useControllerForOpenable();
  const addResourceModal = useControllerForOpenable();

  return (
    <ContextForDashboardJournalModals.Provider
      value={{
        addCollectionModal: addCollectionModal,
        addResourceModal: addResourceModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addCollectionModal}>
        <DashboardJournalAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceModal}>
        <DashboardJournalAddResourceModal />
      </ContextForOpenable.Provider>
    </ContextForDashboardJournalModals.Provider>
  );
}
