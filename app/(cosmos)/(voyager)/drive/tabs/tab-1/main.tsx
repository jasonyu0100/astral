import { TabGreenShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { driveMap } from '../../map';
import { CraftTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Search;
  const active = tab === tabText;

  return (
    <Tab href={driveMap.drive.search.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
