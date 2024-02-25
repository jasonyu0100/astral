import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { journalMap } from '../../map';
import { LinkTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = LinkTabStage.Explore;
  const active = tab === tabText;

  return (
    <Tab href={journalMap.journal.explore.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
