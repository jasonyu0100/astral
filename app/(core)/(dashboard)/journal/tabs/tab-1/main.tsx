import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { JournalTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = JournalTabStage.Daily;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.daily.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
