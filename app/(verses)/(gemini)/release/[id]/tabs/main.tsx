import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';
import { TabOne } from './tab-1/main';
import { TabsRow } from '@/(verses)/(common)/tabs/tabs-row/main';
import { Tabs } from '@/(verses)/(common)/tabs/main';
import { TabsBackButton } from '@/(verses)/(common)/tabs/tabs-row/back-button/main';

interface ReleaseTabProps {
  tab?: string;
}

export enum ReleaseTabStage {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
}

export function ReleaseTabs({ tab }: ReleaseTabProps) {
  return (
    <Tabs>
      {/* <TabsBackButton href={labelMap.label.release.link} /> */}
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
        <TabFour tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
