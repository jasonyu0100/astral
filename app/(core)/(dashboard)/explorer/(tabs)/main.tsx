import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
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
