import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../(common)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { marketMap } from '../../map';
import { BoardTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = BoardTabStage.Journey;
  const active = tab === tabText;

  return (
    <Tab href={marketMap.market.journey.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
