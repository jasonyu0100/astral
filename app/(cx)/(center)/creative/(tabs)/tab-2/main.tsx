import { Tab } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/text/main';
import { TabGreenShard } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/shard/green/main';
import { creativeMap } from '../../map';
import { CreativeTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = CreativeTabStage.Stars;
  const active = tab === tabText;

  return (
    <Tab href={creativeMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
