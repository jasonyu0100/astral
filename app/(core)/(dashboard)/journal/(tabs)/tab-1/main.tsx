import { Tab } from '../../../../../ui/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../ui/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../ui/(dashboard)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { JournalTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = JournalTabStage.Entry;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.record.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
