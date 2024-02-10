import { TabGreenShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { tracksMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Moves;
  const active = tab === tabText;

  return (
    <Tab href={tracksMap.tracks.moves.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
