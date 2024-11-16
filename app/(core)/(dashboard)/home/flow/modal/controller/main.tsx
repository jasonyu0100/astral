import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomeFlowCreateSpaceModalView } from '../create-space/from-template/main';
import { HomeFlowAddFlowModal } from '../flow/main';

export const ContextForHomeFlowModals = createContext(
  {} as flowCurrentModalsController,
);

export interface flowCurrentModalsController {
  createSpaceController: ContextForOpenableInterface;
  HomeFlowController: ContextForOpenableInterface;
}

export function HomeFlowModals({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForOpenable();
  const HomeFlowController = useControllerForOpenable();

  return (
    <ContextForHomeFlowModals.Provider
      value={{
        createSpaceController: createSpaceController,
        HomeFlowController: HomeFlowController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomeFlowCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={HomeFlowController}>
        <HomeFlowAddFlowModal />
      </ContextForOpenable.Provider>
    </ContextForHomeFlowModals.Provider>
  );
}
