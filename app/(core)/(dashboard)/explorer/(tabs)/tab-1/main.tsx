import { TabBlueShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../common//tabs/tabs-row/tab/main';
import { TabText } from '../../../common//tabs/tabs-row/tab/text/main';
import { explorerMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Projects;
  const active = tab === tabText;

  return (
    <Tab href={explorerMap.venture.projects.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
