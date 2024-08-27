import { Tabs } from '../../common//tabs/main';
import { TabsRow } from '../../common//tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

export enum ProjectTabStage {
  Projects = 'Projects',
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
