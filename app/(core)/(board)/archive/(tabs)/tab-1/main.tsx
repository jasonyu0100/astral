import { TabGreenShard } from '@/(components)/(core)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../../(components)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(core)/tabs/tabs-row/tab/text/main';
import { archiveMap } from '../../map';
import { CraftTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Search;
  const active = tab === tabText;

  return (
    <Tab href={archiveMap.archive.search.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
