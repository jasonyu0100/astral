import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { DashboardJournalAddFileModal } from '../add/idea/file/main';
import { DashboardJournalAddTextStickyModal } from '../add/idea/text/main';

export const ContextForDashboardUploadsModals = createContext(
  {} as DashboardUploadsModalsController,
);

export interface DashboardUploadsModalsController {
  addFileModal: ContextForOpenableInterface;
  addTextStickyModal: ContextForOpenableInterface;
}

export function DashboardUploadsModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addFileModal = useControllerForOpenable();
  const addTextStickyModal = useControllerForOpenable();

  return (
    <ContextForDashboardUploadsModals.Provider
      value={{
        addFileModal: addFileModal,
        addTextStickyModal: addTextStickyModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addFileModal}>
        <DashboardJournalAddFileModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextStickyModal}>
        <DashboardJournalAddTextStickyModal />
      </ContextForOpenable.Provider>
    </ContextForDashboardUploadsModals.Provider>
  );
}
