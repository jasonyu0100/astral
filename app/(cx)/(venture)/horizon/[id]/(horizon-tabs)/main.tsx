import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';
import { TabOne } from './tab-1/main';
import { TabsRow } from '@/(components)/(cx)/tabs/tabs-row/main';
import { Tabs } from '@/(components)/(cx)/tabs/main';

interface ReleaseTabProps {
  tab?: string;
}

export enum ReleaseTabStage {
  Link = 'Link',
  Map = 'Map',
  Board = 'Board',
  Origin = 'Origin',
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
