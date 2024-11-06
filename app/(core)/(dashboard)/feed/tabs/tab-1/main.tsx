import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { updatesMap } from '../../map';
import { UpdatesTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = UpdatesTabStage.Explore;
  const active = tab === tabText;

  return (
    <Tab href={updatesMap.updates.explore.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
