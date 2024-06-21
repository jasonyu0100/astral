import { TabPurpleShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/purple/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { ventureMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Three;
  const active = tab === tabText;

  return (
    <Tab href={ventureMap.venture.projects.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
