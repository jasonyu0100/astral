import { TabGreenShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { ventureMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Two;
  const active = tab === tabText;

  return (
    <Tab href={ventureMap.venture.projects.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
