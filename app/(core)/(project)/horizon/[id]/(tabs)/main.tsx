import { Tabs } from '@/ui/(dashboard)/tabs/main';
import { TabsRow } from '@/ui/(dashboard)/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';

interface ReleaseTabProps {
  tab?: string;
}

export enum ReleaseTabStage {
  Area = 'Area',
  Board = 'Board',
  Chart = 'Chart',
  Lead = 'Lead',
}

export function ReleaseTabs({ tab }: ReleaseTabProps) {
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
