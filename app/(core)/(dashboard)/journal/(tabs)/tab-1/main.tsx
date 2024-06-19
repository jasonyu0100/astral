import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { JournalTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = JournalTabStage.record;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.record.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
