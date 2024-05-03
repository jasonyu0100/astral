import { Tab } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { JournalTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = JournalTabStage.Social;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.social.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
