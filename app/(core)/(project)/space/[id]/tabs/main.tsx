import { Tabs } from '@/(core)/(dashboard)/common//tabs/main';
import { TabsRow } from '@/(core)/(dashboard)/common//tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Chat = 'Chat',
  Map = 'Map',
  Journey = 'Journey',
  Spotlight = 'Spotlight',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
        {/* <TabFour tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
