import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { FlowCurrentCreateSpaceModalView } from '../create-space/from-template/main';

export const ContextForFlowCurrentModals = createContext(
  {} as flowCurrentModalsController,
);

export interface flowCurrentModalsController {
  createSpaceController: ContextForOpenableInterface;
}

export function FlowCurrentModals({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForOpenable();

  return (
    <ContextForFlowCurrentModals.Provider
      value={{
        createSpaceController: createSpaceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={createSpaceController}>
        <FlowCurrentCreateSpaceModalView />
      </ContextForOpenable.Provider>
    </ContextForFlowCurrentModals.Provider>
  );
}
