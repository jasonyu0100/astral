import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../(common)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { LinkTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = LinkTabStage.Journal;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.journal.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
