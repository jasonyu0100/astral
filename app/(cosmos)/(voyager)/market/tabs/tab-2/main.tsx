import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { TabGreenShard } from '../../../../(common)/tabs/tabs-row/tab/shard/green/main';
import { marketMap } from '../../map';
import { BoardTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = BoardTabStage.Craft;
  const active = tab === tabText;

  return (
    <Tab href={marketMap.market.craft.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
