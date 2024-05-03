import { Tab } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { SpaceTabStages } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.Two;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.spaces.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
