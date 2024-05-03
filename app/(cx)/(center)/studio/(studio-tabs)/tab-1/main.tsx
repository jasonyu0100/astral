import { Tab } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { SpaceTabStages } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.Spaces;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.spaces.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
