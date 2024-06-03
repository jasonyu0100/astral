import { TabTwo } from './tab-1/main';
import { TabOne } from './tab-2/main';
import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { TabsBackButton } from '@/(components)/(dashboard)/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';

export enum CraftTabStage {
  Search = 'Search',
  Explorer = 'Explorer',
}
interface CraftTabs {
  backUrl?: string;
  tab?: string;
}

export function CraftTabs({ tab, backUrl }: CraftTabs) {
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
