import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { feedsMap } from '../../map';
import { UpdatesTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = UpdatesTabStage.ForYou;
  const active = tab === tabText;

  return (
    <Tab href={feedsMap.feed.forYou.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
