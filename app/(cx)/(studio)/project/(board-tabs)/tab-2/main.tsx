import { TabGreenShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/green/main';
import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { projectMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Two;
  const active = tab === tabText;

  return (
    <Tab href={projectMap.moves.board.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
