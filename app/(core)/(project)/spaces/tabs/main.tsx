import { homeMap } from '@/(core)/(dashboard)/home/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { TabsContainer } from '@/components/tabs/main';
import { TabsBackButton } from '@/components/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { useContext } from 'react';
import { SpacesTabChat } from './chat-tab/main';
import { SpaceTabFocus } from './focus-tab/main';
import { SpacesTabIdeas } from './ideas-tab/main';
import { SpacesTabUpdates } from './updates-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Focus = 'Focus',
  Ideas = 'Ideas',
  Chat = 'Chat',
  Updates = 'Updates',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer padding>
      <TabsBackButton href={homeMap.home.projects.link} />
      <TabsRow>
        <SpaceTabFocus tab={tab} />
        <SpacesTabIdeas tab={tab} />
        <SpacesTabChat tab={tab} />
        <SpacesTabUpdates tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
