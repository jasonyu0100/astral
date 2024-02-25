import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { LinkTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = LinkTabStage.Feed;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.feed.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
