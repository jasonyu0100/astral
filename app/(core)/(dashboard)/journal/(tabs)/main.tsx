import { TabsBackButton } from '@/(components)/(dashboard)/tabs/tabs-row/back-button/main';
import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { studioMap } from '../../studio/map';
import { TabOne } from './tab-1/main';

export enum JournalTabStage {
  Entry = 'Entry',
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
