import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../(common)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { spacesMap } from '../../map';
import { SpaceTabStages } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.All;
  const active = tab === tabText;

  return (
    <Tab href={spacesMap.spaces.all.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
