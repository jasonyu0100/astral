import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '../../../../(common)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { feedMap } from '../../map';
import { LinkTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = LinkTabStage.Social;
  const active = tab === tabText;

  return (
    <Tab href={feedMap.feed.social.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
