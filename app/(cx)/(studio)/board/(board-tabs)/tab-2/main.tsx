import { TabGreenShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { boardMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Two;
  const active = tab === tabText;

  return (
    <Tab href={boardMap.moves.board.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
