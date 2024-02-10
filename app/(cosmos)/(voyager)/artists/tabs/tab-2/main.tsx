import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { TabGreenShard } from '../../../../(common)/tabs/tabs-row/tab/shard/green/main';
import { artistsMap } from '../../map';
import { ArtistsTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = ArtistsTabStage.Stars;
  const active = tab === tabText;

  return (
    <Tab href={artistsMap.artists.stars.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
