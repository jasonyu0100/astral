import { Tab } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { JournalTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = JournalTabStage.Explore;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.explore.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
