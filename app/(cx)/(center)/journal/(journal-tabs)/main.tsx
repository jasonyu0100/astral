import { TabTwo } from './tab-2/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-3/main';
import { TabsRow } from '../../../../(pkgs)/(core)/tabs/tabs-row/main';
import { Tabs } from '../../../../(pkgs)/(core)/tabs/main';
import { TabsBackButton } from '@/(pkgs)/(core)/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';

export enum JournalTabStage {
  Updates = 'Updates',
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
