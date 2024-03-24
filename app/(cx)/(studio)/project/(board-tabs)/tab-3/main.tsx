import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/purple/main';
import { projectMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Three;
  const active = tab === tabText;

  return (
    <Tab href={projectMap.moves.board.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
