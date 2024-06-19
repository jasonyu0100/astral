import { TabBlueShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { archiveMap } from '../../map';
import { ArchiveTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = ArchiveTabStage.explorer;
  const active = tab === tabText;

  return (
    <Tab href={archiveMap.archive.explorer.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
