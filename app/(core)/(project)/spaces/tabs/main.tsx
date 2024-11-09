import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { useContext } from 'react';
import { SpacesTabChannel } from './channel-tab/main';
import { SpaceTabMission } from './mission-tab/main';
import { SpacesTabSpace } from './space-tab/main';
import { SpacesTabLive } from './table-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Work = 'Work',
  Space = 'Space',
  Live = 'Live',
  Channel = 'Channel',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer>
      <TabsRow>
        <SpaceTabMission tab={tab} />
        <SpacesTabSpace tab={tab} />
        <SpacesTabChannel tab={tab} />
        <SpacesTabLive tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
