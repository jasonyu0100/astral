import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../(common)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { feedMap } from '../../map';
import { LinkTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = LinkTabStage.Explore;
  const active = tab === tabText;

  return (
    <Tab href={feedMap.feed.explore.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
