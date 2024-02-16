import { TabBlueShard } from '@/(verses)/(common)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { tracksMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Releases;
  const active = tab === tabText;

  return (
    <Tab href={tracksMap.tracks.releases.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
