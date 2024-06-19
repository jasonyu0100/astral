import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { creativeMap } from '../../map';
import { CreativeTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = CreativeTabStage.network;
  const active = tab === tabText;

  return (
    <Tab href={creativeMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
