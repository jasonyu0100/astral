import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { updatesMap } from '../../map';
import { UpdatesTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = UpdatesTabStage.Following;
  const active = tab === tabText;

  return (
    <Tab href={updatesMap.updates.following.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
