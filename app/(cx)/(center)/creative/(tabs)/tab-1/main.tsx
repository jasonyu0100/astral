import { Tab } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/text/main';
import { creativeMap } from '../../map';
import { CreativeTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = CreativeTabStage.Network;
  const active = tab === tabText;

  return (
    <Tab href={creativeMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
