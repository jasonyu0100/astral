import { TabTwo } from './tab-2/main';
import { TabThree } from './tab-3/main';
import { TabFour } from './tab-4/main';
import { TabOne } from './tab-1/main';
import { TabsRow } from '@/(pkgs)/(core)/tabs/tabs-row/main';
import { Tabs } from '@/(pkgs)/(core)/tabs/main';

interface ReleaseTabProps {
  tab?: string;
}

export enum ReleaseTabStage {
  Field = 'Field',
  Map = 'Map',
  Arc = 'Arc',
  Point = 'Point',
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
