import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { FlowCurrentCreateSpaceModalView } from '../create-space/from-template/main';
import { FlowCurrentAddFlowModal } from '../flow/main';

export const ContextForFlowCurrentModals = createContext(
  {} as flowCurrentModalsController,
);

export interface flowCurrentModalsController {
  createSpaceController: ContextForOpenableInterface;
  createFlowController: ContextForOpenableInterface;
}

export function FlowCurrentModals({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForOpenable();
  const createFlowController = useControllerForOpenable();

  return (
    <ContextForFlowCurrentModals.Provider
      value={{
        createSpaceController: createSpaceController,
        createFlowController: createFlowController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={createSpaceController}>
        <FlowCurrentCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createFlowController}>
        <FlowCurrentAddFlowModal />
      </ContextForOpenable.Provider>
    </ContextForFlowCurrentModals.Provider>
  );
}
