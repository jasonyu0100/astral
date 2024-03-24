import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/purple/main';
import { creativeMap } from '../../map';
import { ArtistTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = ArtistTabStage.Fans;
  const active = tab === tabText;

  return (
    <Tab href={creativeMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
