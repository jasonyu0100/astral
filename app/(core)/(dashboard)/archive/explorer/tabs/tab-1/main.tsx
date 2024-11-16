import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { explorerMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Projects;
  const active = tab === tabText;

  return (
    <Tab href={explorerMap.explorer.projects.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
