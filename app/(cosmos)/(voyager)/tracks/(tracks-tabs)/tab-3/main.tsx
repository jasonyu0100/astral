import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/purple/main';
import { tracksMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Trends;
  const active = tab === tabText;

  return (
    <Tab href={tracksMap.tracks.releases.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
