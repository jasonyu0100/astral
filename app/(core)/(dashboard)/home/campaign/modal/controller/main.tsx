import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomeCampaignCreateSpaceModalView } from '../create-space/from-template/main';
import { HomeCampaignAddFlowModal } from '../flow/main';

export const ContextForHomeCampaignModals = createContext(
  {} as flowCurrentModalsController,
);

export interface flowCurrentModalsController {
  createSpaceController: ContextForOpenableInterface;
  HomeCampaignController: ContextForOpenableInterface;
}

export function HomeCampaignModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const createSpaceController = useControllerForOpenable();
  const HomeCampaignController = useControllerForOpenable();

  return (
    <ContextForHomeCampaignModals.Provider
      value={{
        createSpaceController: createSpaceController,
        HomeCampaignController: HomeCampaignController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomeCampaignCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={HomeCampaignController}>
        <HomeCampaignAddFlowModal />
      </ContextForOpenable.Provider>
    </ContextForHomeCampaignModals.Provider>
  );
}
