import { Tabs } from '@/(components)/(dashboard)/tabs/main';
import { TabsRow } from '@/(components)/(dashboard)/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Storm = 'Storm',
  Draft = 'Draft',
  Flow = 'Flow',
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
