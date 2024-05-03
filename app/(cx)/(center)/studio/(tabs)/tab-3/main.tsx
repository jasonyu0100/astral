import { Tab } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { SpaceTabStages } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.Three;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.spaces.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
