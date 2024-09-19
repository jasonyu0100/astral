import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HorizonPostModal } from '../chat/main';

export const ContextForHorizonsHorizonModals = createContext(
  {} as HorizonsHorizonModals,
);

export interface HorizonsHorizonModals {
  horizonPostModal: ContextForOpenableInterface;
}

export function HorizonsHorizonModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const horizonsHorizonModal = useControllerForOpenable();

  return (
    <ContextForHorizonsHorizonModals.Provider
      value={{
        horizonPostModal: horizonsHorizonModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={horizonsHorizonModal}>
        <HorizonPostModal />
      </ContextForOpenable.Provider>
    </ContextForHorizonsHorizonModals.Provider>
  );
}
