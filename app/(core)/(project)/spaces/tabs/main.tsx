import { homeMap } from '@/(core)/(dashboard)/home/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { TabsContainer } from '@/components/tabs/main';
import { TabsBackButton } from '@/components/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { useContext } from 'react';
import { SpacesTabChannel } from './channel-tab/main';
import { SpaceTabFocus } from './focus-tab/main';
import { SpacesTabSpace } from './space-tab/main';
import { SpacesTabLive } from './table-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Focus = 'Focus',
  Space = 'Space',
  Public = 'Public',
  Channel = 'Channel',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer>
      <TabsBackButton href={homeMap.home.personal.link} />
      <TabsRow>
        <SpacesTabSpace tab={tab} />
        <SpaceTabFocus tab={tab} />
        <SpacesTabChannel tab={tab} />
        <SpacesTabLive tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
