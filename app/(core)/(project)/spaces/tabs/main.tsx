import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { SpaceTabBoard } from './board-tab/main';
import { SpacesTabFlight } from './flight-tab/main';
import { SpacesTabMap } from './map-tab/main';
import { SpacesTabSpace } from './space-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Space = 'Space',
  Map = 'Map',
  Board = 'Board',
  Flight = 'Flight',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <SpacesTabSpace tab={tab} />
        <SpacesTabMap tab={tab} />
        <SpaceTabBoard tab={tab} />
        <SpacesTabFlight tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
