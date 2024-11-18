import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomeCreateCreateSpaceModalView } from '../create-space/from-template/main';

export const ContextForInspireModals = createContext(
  {} as InspireModalsController,
);

export interface InspireModalsController {
  createSpaceController: ContextForOpenableInterface;
}

export function InspireModals({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForOpenable();

  return (
    <ContextForInspireModals.Provider
      value={{
        createSpaceController: createSpaceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomeCreateCreateSpaceModalView />
      </ContextForOpenable.Provider>
    </ContextForInspireModals.Provider>
  );
}
