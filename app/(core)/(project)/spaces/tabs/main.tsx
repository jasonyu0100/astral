import { liveMap } from '@/(core)/(public)/live/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabRedShard } from '@/components/tabs/tabs-row/tab/shard/red/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { SpacesTabChat } from './chat-tab/main';
import { SpaceTabProgress } from './progress-tab/main';
import { SpacesTabScene } from './scene-tab/main';
import { SpacesTabUpdates } from './updates-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Progress = 'Progress',
  Chat = 'Chat',
  Scene = 'Scene',
  Updates = 'Updates',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer>
      <TabsRow>
        <SpaceTabProgress tab={tab} />
        <SpacesTabChat tab={tab} />
        <SpacesTabScene tab={tab} />
        <SpacesTabUpdates tab={tab} />
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
