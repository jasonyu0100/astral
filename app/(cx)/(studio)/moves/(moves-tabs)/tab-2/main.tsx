import { TabGreenShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { movesMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Moves;
  const active = tab === tabText;

  return (
    <Tab href={movesMap.moves.board.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
