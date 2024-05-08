import { Tab } from '../../../../../(components)/(core)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(core)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(core)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { JournalTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = JournalTabStage.Updates;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.updates.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
