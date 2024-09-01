import { Tabs } from '../../common//tabs/main';
import { TabsRow } from '../../common//tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

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
        {/* <TabTwo tab={tab} /> */}
        {/* <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
