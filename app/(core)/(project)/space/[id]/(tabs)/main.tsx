import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';
import { TabOne } from './tab-1/main';
import { TabsRow } from '@/(components)/(dashboard)/tabs/tabs-row/main';
import { Tabs } from '@/(components)/(dashboard)/tabs/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Storm = 'Storm',
  Map = 'Map',
  Draft = 'Draft',
  Sea = 'Sea',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
        <TabFour tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
