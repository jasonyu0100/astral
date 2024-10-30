import { publicSpaceMap } from '@/(core)/(public)/public/[id]/map';
import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/components/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useContext } from 'react';
import { SpacesTabChat } from './chat-tab/main';
import { SpacesTabPages } from './flight-tab/main';
import { SpacesTabScene } from './map-tab/main';
import { SpaceTabProgress } from './progress-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Progress = 'Progress',
  Chat = 'Chat',
  Scene = 'Scene',
  Post = 'Post',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <TabsContainer>
      <TabsRow>
        <SpaceTabProgress tab={tab} />
        <SpacesTabChat tab={tab} />
        <SpacesTabScene tab={tab} />
        <SpacesTabPages tab={tab} />
      </TabsRow>
      <Tab
        href={publicSpaceMap.space.link(spaceMainController.state.objId)}
        target='_blank'
      >
        <TabText active={true}>Live</TabText>
        <TabPurpleShard active={false} />
      </Tab>
    </TabsContainer>
  );
}
