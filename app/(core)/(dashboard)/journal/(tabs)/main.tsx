import { TabTwo } from './tab-2/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-3/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsBackButton } from '@/(components)/(dashboard)/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';

export enum JournalTabStage {
  Record = 'Record',
  Social = 'Social',
  Explore = 'Explore',
}
interface JournalTabProps {
  tab?: string;
}

export function LinkTabs({ tab }: JournalTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={studioMap.studio.spaces.link} />
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
        {/* <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
