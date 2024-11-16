import { createMap } from '@/(core)/(dashboard)/create/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { TabsContainer } from '@/components/tabs/main';
import { TabsBackButton } from '@/components/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { useContext } from 'react';
import { SpacesTabChannel } from './chat-tab/main';
import { SpaceTabFocus } from './focus-tab/main';
import { SpacesTabSpace } from './ideas-tab/main';
import { SpacesTabLive } from './posts-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Focus = 'Focus',
  Ideas = 'Ideas',
  Chat = 'Chat',
  Public = 'Posts',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer padding>
      <TabsBackButton href={createMap.home.spaces.link} />
      <TabsRow>
        <SpacesTabSpace tab={tab} />
        <SpaceTabFocus tab={tab} />
        <SpacesTabChannel tab={tab} />
        <SpacesTabLive tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
