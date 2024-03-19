import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/purple/main';
import { boardMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Three;
  const active = tab === tabText;

  return (
    <Tab href={boardMap.moves.board.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
