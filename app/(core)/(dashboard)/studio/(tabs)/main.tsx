import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';

export enum StudioTabStages {
  Personal = 'Personal',
  Shared = 'Shared',
  Backed = 'Backed',
}

interface StudioTabProps {
  tab?: string;
}

export function StudioTabs({ tab }: StudioTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        {/* <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
