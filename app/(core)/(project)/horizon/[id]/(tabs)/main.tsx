import { Tabs } from '@/(core)/(dashboard)/common//tabs/main';
import { TabsRow } from '@/(core)/(dashboard)/common//tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-2/main';
import { TabTwo } from './tab-3/main';
import { TabFour } from './tab-4/main';

interface HorizonTabProps {
  tab?: string;
}

export enum HorizonTabStage {
  Forum = 'Forum',
  Arc = 'Arc',
  Board = 'Board',
  Point = 'Point',
}

export function HorizonTabs({ tab }: HorizonTabProps) {
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
