import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { networkMap } from '../../map';
import { CreativeTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = CreativeTabStage.Creative;
  const active = tab === tabText;

  return (
    <Tab href={networkMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
