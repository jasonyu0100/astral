import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/purple/main';
import { artistsMap } from '../../map';
import { ArtistsTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = ArtistsTabStage.Fans;
  const active = tab === tabText;

  return (
    <Tab href={artistsMap.artists.fans.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
