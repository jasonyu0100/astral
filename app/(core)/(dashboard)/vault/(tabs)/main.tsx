import { TabsBackButton } from '@/(components)/(dashboard)/tabs/tabs-row/back-button/main';
import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { studioMap } from '../../studio/map';
import { TabOne } from './tab-1/main';

export enum ArchiveTabStage {
  Finder = 'Finder',
}
interface ArchiveTabsInput {
  backUrl?: string;
  tab?: string;
}

export function ArchiveTabs({ tab, backUrl }: ArchiveTabsInput) {
  return (
    <Tabs>
      <TabsBackButton href={backUrl ? backUrl : studioMap.studio.spaces.link} />
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
