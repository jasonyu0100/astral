import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { artistsMap } from '../../map';
import { ArtistsTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = ArtistsTabStage.Network;
  const active = tab === tabText;

  return (
    <Tab href={artistsMap.artists.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
