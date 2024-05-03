import { Tabs } from '../../../../(lib)/(core)/tabs/main';
import { TabsRow } from '../../../../(lib)/(core)/tabs/tabs-row/main';
import { TabTwo } from './tab-2/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-3/main';
import { TabsBackButton } from '@/(lib)/(core)/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';

export enum ProjectTabStage {
  Horizons = 'Horizons',
  Two = 'Two',
  Three = 'Three',
}
interface ProjectTabProps {
  tab?: string;
}

export function ProjectTabs({ tab }: ProjectTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} />
        <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
