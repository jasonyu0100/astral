import { liveMap } from '@/(core)/(public)/live/[id]/map';
import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabRedShard } from '@/components/tabs/tabs-row/tab/shard/red/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useContext } from 'react';
import { SpacesTabChat } from './chat-tab/main';
import { SpacesTabPreview } from './preview-tab/main';
import { SpaceTabProgress } from './progress-tab/main';
import { SpacesTabScene } from './scene-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Progress = 'Progress',
  Chat = 'Chat',
  Scene = 'Scene',
  Preview = 'Preview',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer>
      <TabsRow>
        <SpaceTabProgress tab={tab} />
        <SpacesTabChat tab={tab} />
        <SpacesTabScene tab={tab} />
        <SpacesTabPreview tab={tab} />
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
