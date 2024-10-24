import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesPersonalShowNoticeModal } from '../show/notice/main';

export const ContextForSpacesPersonalModals = createContext(
  {} as SpacesPersonalModals,
);

export interface SpacesPersonalModals {
  showNoticeController: ContextForOpenableInterface;
}

export function SpacesPersonalModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNoticeController = useControllerForOpenable();

  return (
    <ContextForSpacesPersonalModals.Provider
      value={{
        showNoticeController: showNoticeController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <SpacesPersonalShowNoticeModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesPersonalModals.Provider>
  );
}
