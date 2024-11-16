import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { feedsMap } from '../../map';
import { ExploreTabStage } from '../main';

export function TabFollowing({ tab }: { tab?: string }) {
  const tabText = ExploreTabStage.Following;
  const active = tab === tabText;

  return (
    <Tab href={feedsMap.feed.following.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
