import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { SpaceTabBoard } from './board-tab/main';
import { SpacesTabChat } from './conversation-tab/main';
import { SpacesTabFlight } from './flight-tab/main';
import { SpacesTabMap } from './map-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Conversation = 'Conversation',
  Map = 'Map',
  Board = 'Board',
  Flight = 'Flight',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <SpacesTabChat tab={tab} />
        <SpacesTabMap tab={tab} />
        <SpaceTabBoard tab={tab} />
        <SpacesTabFlight tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
