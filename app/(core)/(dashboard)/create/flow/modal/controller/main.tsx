import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { CreateFlowCreateSpaceModalView } from '../create-space/from-template/main';
import { CreateFlowAddFlowModal } from '../flow/main';

export const ContextForCreateFlowModals = createContext(
  {} as flowCurrentModalsController,
);

export interface flowCurrentModalsController {
  createSpaceController: ContextForOpenableInterface;
  createFlowController: ContextForOpenableInterface;
}

export function CreateFlowModals({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForOpenable();
  const createFlowController = useControllerForOpenable();

  return (
    <ContextForCreateFlowModals.Provider
      value={{
        createSpaceController: createSpaceController,
        createFlowController: createFlowController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={createSpaceController}>
        <CreateFlowCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createFlowController}>
        <CreateFlowAddFlowModal />
      </ContextForOpenable.Provider>
    </ContextForCreateFlowModals.Provider>
  );
}
