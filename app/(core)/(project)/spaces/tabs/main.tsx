import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { SpaceTabBoard } from './board-tab/main';
import { SpacesTabChat } from './chat-tab/main';
import { SpacesTabPages } from './flight-tab/main';
import { SpacesTabScene } from './map-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Board = 'Board',
  Chat = 'Chat',
  Scene = 'Scene',
  Post = 'Post',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <SpaceTabBoard tab={tab} />
        <SpacesTabChat tab={tab} />
        <SpacesTabScene tab={tab} />
        <SpacesTabPages tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
