import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { TabGreenShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/green/main';
import { creativeMap } from '../../map';
import { ArtistTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = ArtistTabStage.Stars;
  const active = tab === tabText;

  return (
    <Tab href={creativeMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
