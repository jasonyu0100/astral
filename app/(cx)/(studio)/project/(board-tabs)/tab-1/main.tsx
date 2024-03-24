import { TabBlueShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { projectMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Moves;
  const active = tab === tabText;

  return (
    <Tab href={projectMap.moves.board.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
