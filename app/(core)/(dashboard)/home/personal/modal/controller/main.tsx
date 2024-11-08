import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { CreateSpaceModalView } from '../create-space/main';
import { SpacesPersonalShowNoticeModal } from '../show/notice/main';

export const ContextForSpacesPersonalModals = createContext(
  {} as SpacesPersonalModals,
);

export interface SpacesPersonalModals {
  showNoticeController: ContextForOpenableInterface;
  createSpaceController: ContextForOpenableInterface;
}

export function SpacesPersonalModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNoticeController = useControllerForOpenable();
  const createSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesPersonalModals.Provider
      value={{
        showNoticeController: showNoticeController,
        createSpaceController: createSpaceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <SpacesPersonalShowNoticeModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createSpaceController}>
        <CreateSpaceModalView />
      </ContextForOpenable.Provider>
    </ContextForSpacesPersonalModals.Provider>
  );
}
