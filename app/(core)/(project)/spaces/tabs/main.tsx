import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabRedShard } from '@/components/tabs/tabs-row/tab/shard/red/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { SpacesTabChannel } from './channel-tab/main';
import { SpacesTabLaunch } from './launch-tab/main';
import { SpaceTabMission } from './mission-tab/main';
import { SpacesTabSpace } from './space-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Mission = 'Mission',
  Channel = 'Channel',
  Space = 'Space',
  Launch = 'Launch',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer>
      <TabsRow>
        <SpaceTabMission tab={tab} />
        <SpacesTabChannel tab={tab} />
        <SpacesTabSpace tab={tab} />
        <SpacesTabLaunch tab={tab} />
      </TabsRow>
      <Tab
        href={liveMap.live.link(spaceMainController.state.objId)}
        target='_blank'
      >
        <TabText active={true}>Live</TabText>
        <TabRedShard active={true} />
      </Tab>
    </TabsContainer>
  );
}
