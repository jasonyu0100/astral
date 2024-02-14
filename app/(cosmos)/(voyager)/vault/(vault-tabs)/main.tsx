import { TabTwo } from './tab-1/main';
import { TabOne } from './tab-2/main';
import { Tabs } from '../../../(common)/tabs/main';
import { TabsRow } from '../../../(common)/tabs/tabs-row/main';
import { TabsBackButton } from '@/(cosmos)/(common)/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';

export enum CraftTabStage {
  Search = 'Search',
  Explorer = 'Explorer',
}
interface CraftTabs {
  tab?: string;
}

export function CraftTabs({ tab }: CraftTabs) {
  return (
    <Tabs>
      <TabsBackButton href={studioMap.studio.now.link} />
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
