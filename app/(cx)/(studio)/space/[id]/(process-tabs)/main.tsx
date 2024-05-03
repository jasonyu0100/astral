import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';
import { TabOne } from './tab-1/main';
import { TabsRow } from '@/(pkgs)/(core)/tabs/tabs-row/main';
import { Tabs } from '@/(pkgs)/(core)/tabs/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Storm = 'Storm',
  Map = 'Map',
  Flow = 'Flow',
  Sea = 'Sea',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
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
