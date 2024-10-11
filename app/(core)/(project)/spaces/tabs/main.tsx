import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { SpacesTabSpace } from './tab-1/main';
import { SpacesTabMap } from './tab-2/main';
import { SpaceTabJourney } from './tab-3/main';
import { SpacesTabFlight } from './tab-4/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Space = 'Space',
  Map = 'Map',
  Journey = 'Journey',
  Flight = 'Flight',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <SpacesTabSpace tab={tab} />
        <SpacesTabMap tab={tab} />
        <SpaceTabJourney tab={tab} />
        <SpacesTabFlight tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
