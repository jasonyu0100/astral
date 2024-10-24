import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { SpaceTabBoard } from './board-tab/main';
import { SpacesTabChat } from './conversation-tab/main';
import { SpacesTabPost } from './flight-tab/main';
import { SpacesTabMap } from './map-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Conversation = 'Conversation',
  Map = 'Map',
  Board = 'Board',
  Post = 'Post',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <SpacesTabChat tab={tab} />
        <SpacesTabMap tab={tab} />
        <SpaceTabBoard tab={tab} />
        <SpacesTabPost tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
